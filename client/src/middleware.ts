import { NextRequest, NextResponse } from "next/server";

/**
 * Decode the JWT payload without verifying the signature.
 * Signature security is enforced by the Express server on every API call.
 * Here we only need to know whether a plausible, non-expired token exists
 * so we can redirect the browser before any page content is rendered.
 *
 * JWT payloads are base64url-encoded — replace URL-safe chars before atob.
 */
function tokenIsAlive(token: string | undefined): boolean {
  if (!token) return false;
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return false;
    const b64 = parts[1].replaceAll("-", "+").replaceAll("_", "/");
    const payload = JSON.parse(atob(b64)) as { exp?: number };
    if (!payload?.exp) return false;
    return Date.now() / 1000 < payload.exp;
  } catch {
    return false;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;
  const alive = tokenIsAlive(token);

  const isProtected = pathname.startsWith("/teacher-dashboard");
  const isAuthPage =
    pathname === "/login" || pathname === "/register" || pathname === "/";

  if (isProtected && !alive) {
    const url = new URL("/login", request.url);
    // Only surface "session expired" when a token was present but stale —
    // a missing token just means the user hasn't logged in yet.
    if (token) url.searchParams.set("reason", "session_expired");
    return NextResponse.redirect(url);
  }

  if (isAuthPage && alive) {
    return NextResponse.redirect(new URL("/teacher-dashboard", request.url));
  }

  // Un-authed visitor to / → send to login
  if (pathname === "/" && !alive) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/teacher-dashboard/:path*", "/login", "/register"],
};

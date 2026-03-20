/**
 * Auth proxy — forwards login / logout / validate to the Express API on Render.
 *
 * Why: the API lives on Render (different domain) so httpOnly cookies it sets
 * are invisible to Next.js middleware on Vercel. This proxy runs on the same
 * domain as the frontend, so it owns the cookie and middleware can read it.
 *
 * Cookie strategy:
 *   login    → parse token from response body, set cookie directly here
 *   logout   → delete the cookie here
 *   validate → forward the existing cookie + Authorization header to the API;
 *              pass the API's status code back to the caller
 */

import { NextRequest, NextResponse } from "next/server";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

// Must match JWT_EXPIRES_SECONDS on the server (default: 7 days)
const COOKIE_MAX_AGE = 7 * 24 * 60 * 60;

async function handleLogin(req: NextRequest): Promise<NextResponse> {
  const body = await req.text();

  const upstream = await fetch(`${API_BASE}/api/teachers/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });

  const data = await upstream.json();

  if (!upstream.ok) {
    return NextResponse.json(data, { status: upstream.status });
  }

  const res = NextResponse.json(data, { status: 200 });

  // Set the cookie directly — avoids Set-Cookie forwarding issues with fetch.
  if (data.token) {
    res.cookies.set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: COOKIE_MAX_AGE,
      path: "/",
    });
  }

  return res;
}

async function handleLogout(req: NextRequest): Promise<NextResponse> {
  // Best-effort call to the API so it can do any server-side cleanup
  await fetch(`${API_BASE}/api/teachers/auth/logout`, {
    method: "POST",
    headers: {
      ...(req.headers.get("cookie") ? { cookie: req.headers.get("cookie") ?? "" } : {}),
    },
  }).catch(() => {});

  const res = NextResponse.json({ message: "Logged out" }, { status: 200 });
  res.cookies.delete("token");
  return res;
}

async function handleValidate(req: NextRequest): Promise<NextResponse> {
  const upstream = await fetch(`${API_BASE}/api/teachers/auth/validate`, {
    method: "GET",
    headers: {
      ...(req.headers.get("cookie") ? { cookie: req.headers.get("cookie") ?? "" } : {}),
      ...(req.headers.get("authorization")
        ? { authorization: req.headers.get("authorization") ?? "" }
        : {}),
    },
  });

  const data = await upstream.json().catch(() => ({}));
  return NextResponse.json(data, { status: upstream.status });
}

async function proxyAuth(req: NextRequest, path: string[]): Promise<NextResponse> {
  const endpoint = path.join("/");

  if (endpoint === "login") return handleLogin(req);
  if (endpoint === "logout") return handleLogout(req);
  if (endpoint === "validate") return handleValidate(req);

  // Fallback for register and any other auth routes
  const fallbackBody = req.method === "GET" ? undefined : await req.text();
  const upstream = await fetch(`${API_BASE}/api/teachers/auth/${endpoint}`, {
    method: req.method,
    headers: { "Content-Type": "application/json" },
    ...(fallbackBody ? { body: fallbackBody } : {}),
  });
  const data = await upstream.json().catch(() => ({}));
  return NextResponse.json(data, { status: upstream.status });
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  return proxyAuth(req, await params);
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  return proxyAuth(req, await params);
}

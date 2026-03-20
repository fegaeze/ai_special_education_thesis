/**
 * Auth proxy — forwards login / logout / validate to the Express API on Render.
 *
 * Why: the API lives on Render (different domain) so httpOnly cookies it sets
 * are invisible to Next.js middleware on Vercel. This proxy runs on the same
 * domain as the frontend, so it owns the cookie and middleware can read it.
 */

import { NextRequest, NextResponse } from "next/server";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// Must match JWT_EXPIRES_SECONDS on the server (default: 7 days)
const COOKIE_MAX_AGE = 7 * 24 * 60 * 60;

function missingApiBase(): NextResponse {
  console.error("[auth-proxy] NEXT_PUBLIC_API_URL is not set");
  return NextResponse.json(
    { message: "API base URL is not configured on this server." },
    { status: 503 },
  );
}

async function handleLogin(req: NextRequest): Promise<NextResponse> {
  if (!API_BASE) return missingApiBase();

  try {
    const body = await req.text();

    const upstream = await fetch(`${API_BASE}/api/teachers/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });

    const data = await upstream.json().catch(() => ({}));

    if (!upstream.ok) {
      return NextResponse.json(data, { status: upstream.status });
    }

    const res = NextResponse.json(data, { status: 200 });

    // Set the cookie directly — more reliable than forwarding Set-Cookie header.
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
  } catch (err) {
    console.error("[auth-proxy] login error:", err);
    return NextResponse.json(
      { message: "Could not reach the authentication server. Please try again." },
      { status: 503 },
    );
  }
}

async function handleLogout(req: NextRequest): Promise<NextResponse> {
  if (!API_BASE) return missingApiBase();

  try {
    await fetch(`${API_BASE}/api/teachers/auth/logout`, {
      method: "POST",
      headers: {
        ...(req.headers.get("cookie") ? { cookie: req.headers.get("cookie") ?? "" } : {}),
      },
    }).catch(() => {});
  } catch {}

  const res = NextResponse.json({ message: "Logged out" }, { status: 200 });
  res.cookies.delete("token");
  return res;
}

async function handleValidate(req: NextRequest): Promise<NextResponse> {
  if (!API_BASE) return missingApiBase();

  try {
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
  } catch (err) {
    console.error("[auth-proxy] validate error:", err);
    // Return 200 on network errors so the client doesn't log itself out
    return NextResponse.json({ ok: true }, { status: 200 });
  }
}

async function handleRegister(req: NextRequest): Promise<NextResponse> {
  if (!API_BASE) return missingApiBase();

  try {
    const body = await req.text();
    const upstream = await fetch(`${API_BASE}/api/teachers/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
    const data = await upstream.json().catch(() => ({}));
    return NextResponse.json(data, { status: upstream.status });
  } catch (err) {
    console.error("[auth-proxy] register error:", err);
    return NextResponse.json(
      { message: "Could not reach the authentication server. Please try again." },
      { status: 503 },
    );
  }
}

async function proxyAuth(req: NextRequest, path: string[]): Promise<NextResponse> {
  const endpoint = path.join("/");

  if (endpoint === "login") return handleLogin(req);
  if (endpoint === "logout") return handleLogout(req);
  if (endpoint === "validate") return handleValidate(req);
  if (endpoint === "register") return handleRegister(req);

  return NextResponse.json({ message: "Not found" }, { status: 404 });
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  return proxyAuth(req, path);
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  return proxyAuth(req, path);
}

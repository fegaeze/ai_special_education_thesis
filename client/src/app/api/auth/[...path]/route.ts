/**
 * Auth proxy — forwards login / logout / validate to the Express API on Render
 * and re-issues the Set-Cookie header so the cookie is owned by this domain
 * (Vercel), where Next.js middleware can read it.
 */

import { NextRequest, NextResponse } from "next/server";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

async function proxyAuth(req: NextRequest, path: string[]): Promise<NextResponse> {
  const upstream = `${API_BASE}/api/teachers/auth/${path.join("/")}`;

  // Forward the incoming cookie so logout / validate work correctly
  const init: RequestInit = {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      ...(req.headers.get("cookie")
        ? { cookie: req.headers.get("cookie") ?? "" }
        : {}),
    },
  };

  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = await req.text();
  }

  const upstream_res = await fetch(upstream, init);
  const body = await upstream_res.text();

  const res = new NextResponse(body, {
    status: upstream_res.status,
    headers: { "Content-Type": "application/json" },
  });

  // Re-issue every Set-Cookie the API sent so the browser sees them on
  // this domain rather than on the Render domain.
  upstream_res.headers.forEach((value, key) => {
    if (key.toLowerCase() === "set-cookie") {
      res.headers.append("Set-Cookie", value);
    }
  });

  return res;
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

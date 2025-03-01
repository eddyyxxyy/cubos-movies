// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { THEME_COOKIE_NAME, DEFAULT_THEME } from "./lib/constants";

export function middleware(req: NextRequest) {
  const encodedCookieName = encodeURIComponent(THEME_COOKIE_NAME);

  const theme = req.cookies.get(encodedCookieName)?.value || DEFAULT_THEME;
  const res = NextResponse.next();

  res.cookies.set(encodedCookieName, theme, { path: "/" });

  return res;
}

export const config = {
  matcher: "/",
};

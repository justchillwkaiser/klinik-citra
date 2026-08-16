import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);
  const { pathname } = request.nextUrl;

  const isAdminLogin = pathname.startsWith("/admin/login");
  const isAdminPage = pathname.startsWith("/admin");
  const isApiAuth = pathname.startsWith("/api/auth");
  const isStatic =
    pathname.startsWith("/_next") || pathname.includes(".") || pathname.startsWith("/favicon");

  // Admin pages protected (kecuali /admin/login): tanpa session -> /admin/login
  if (isAdminPage && !isAdminLogin && !isApiAuth && !isStatic && !sessionCookie) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    url.search = "";
    return NextResponse.redirect(url);
  }

  // Dah login, jangan biar ulang di login page
  if (isAdminLogin && sessionCookie) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};

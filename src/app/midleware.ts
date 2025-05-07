import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { routing } from "@/i18n/routing";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Redirect `/` to `/en`
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  // Use the next-intl middleware for other routes
  return intlMiddleware(request);
}

export const config = {
  // Match all routes
  matcher: ["/:path*"],
};
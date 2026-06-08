import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.nextUrl.hostname;
  if (host.startsWith("www.")) {
    const url = new URL(request.url);
    url.hostname = host.replace(/^www\./, "");
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};

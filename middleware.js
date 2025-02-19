import { NextResponse } from "next/server";
import { paths } from "./routes";

export async function middleware(req) {
  let response = NextResponse.next();
  if (req.nextUrl.pathname === "/") {
    response = NextResponse.redirect(new URL(paths.work.root, req.url));
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

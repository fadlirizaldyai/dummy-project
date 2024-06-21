import { NextResponse, NextRequest } from "next/server";

const allowedOrigins = [
  /^http:\/\/localhost:\d+$/,
  /^https?:\/\/.*\.ai\.astra\.co\.id$/,
  /^https:\/\/[a-zA-Z0-9-]+\.vercel\.app(\/[a-zA-Z0-9-\/]*)?$/
];

export function middleware(req: NextRequest) {
  const origin = req.headers.get("origin");
  let response = NextResponse.next();

  response.headers.set("Access-Control-Allow-Origin", "*");

  // if (origin && allowedOrigins.some((pattern) => pattern.test(origin))) {
  //   response.headers.set("Access-Control-Allow-Origin", origin);
  // } else {
  //   response.headers.set("Access-Control-Allow-Origin", ""); // or you can set it to 'null'
  // }

  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET,DELETE,PATCH,POST,PUT"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return response;
}

export const config = {
  matcher: "/api/:path*", // Apply this middleware to all API routes
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const authorization = request.headers.get("Authorization");

  if (!authorization) {
    return NextResponse.json(
      { message: "Authorization header missing" },
      { status: 400 }
    );
  }

  // const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const baseURL = 'https://dummy-project-beryl.vercel.app/'

  const response = NextResponse.json({
    redirected: true,
    url: baseURL,
  });
  const response = NextResponse.redirect(new URL("/", baseURL));
  response.cookies.set("token", authorization, { httpOnly: true, path: "/" });

  return response;

  // response.cookies.set("token", authorization, { httpOnly: true, path: "/" });

  // return response;
  // return NextResponse.json({ message: `${authorization}` }, { status: 200 });
}

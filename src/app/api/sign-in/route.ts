import { headers } from "next/headers";
import { auth } from '@/lib/auth'
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {

    const { email, password } = await request.json();

    const data = await auth.api.signInEmail({
      body: {
        email, // required
        password, // required
        rememberMe: true,
        callbackURL: "http://localhost:3000/dashboard",
      },
      // This endpoint requires session cookies.
      headers: await headers(),
    });

    return NextResponse.json({
      message: "Signed In Successfully",
      data
    }, { status: 200 })

  } catch (error: any) {
    console.log(error)
    return NextResponse.json({
      message: error.message
    }, { status: error.statusCode })
  }
}


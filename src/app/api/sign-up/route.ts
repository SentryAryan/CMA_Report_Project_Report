import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password, name, role } = await request.json();

    const data = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
        callbackURL: "http://localhost:3000/dashboard",
      },
    });

    return NextResponse.json({
      message: "Signed-Up Successfully",
      data
    }, { status: 200 })

  } catch (error: any) {
    return NextResponse.json({
      message: error.message
    }, { status: error.statusCode })
  }
}

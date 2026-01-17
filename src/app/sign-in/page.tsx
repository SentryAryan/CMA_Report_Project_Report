"use client"
import { authClient } from "@/lib/auth-client";
import axios from "axios";


export default function SignIn() {

  const signUp = async (e: React.FormEvent) => {
    // await axios.get('/api/test')
    e.preventDefault()
    const { data, error } = await authClient.signUp.email({
      email: "anikrawat18@gmail.com", // user email address
      password: "anikrawat", // user password -> min 8 characters by default
      name: "anik", // user display name
    }, {
      onRequest: (ctx) => {
        //show loading
      },
      onSuccess: async (ctx) => {
        console.log("Signed up successfully")

        //redirect to the dashboard or sign in page
      },
      onError: (ctx) => {
        // display the error message
        console.log(ctx.error);
      },
    });
  }

  const otp = async (e: React.FormEvent) => {
    e.preventDefault()
    const { data, error } = await authClient.emailOtp.sendVerificationOtp({
      email: "anikrawat18@gmail.com", // required
      type: "email-verification", // required
    }, {
      onSuccess: (ctx) => {
        console.log(ctx)
        console.log("OTP sent successfully")
      }
    });

    console.log(data)
  }

  // const signIn = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   const { data, error } = await authClient.signIn.email({
  //     /**
  //      * The user email
  //      */
  //     email: "anikrawat18@gmail.com",
  //     /**
  //      * The user password
  //      */
  //     password: "anikrawat",
  //     /**
  //      * A URL to redirect to after the user verifies their email (optional)
  //      */
  //     // callbackURL: "/dashboard",
  //     /**
  //      * remember the user session after the browser is closed. 
  //      * @default true
  //      */
  //     rememberMe: false
  //   }, {
  //     //callbacks
  //     onSuccess: () => {
  //       console.log("Signed In successfully")
  //     }
  //   })
  // }
  const signIn = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = await authClient.signIn.social({
      provider: "google",
    }, {
      onSuccess: () => {
        console.log("Signed in with google successfully")
      }
    });
  };
  return (
    <form onSubmit={(e) => { otp(e) }} className="flex min-h-screen items-center justify-center font-sans ">
      <input placeholder="email" />
      <input placeholder="password" />
      <button type="submit">submit</button>
    </form>
  );
}

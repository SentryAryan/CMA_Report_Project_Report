"use client"
import { authClient } from "@/lib/auth-client";
import axios from "axios";


export default function SignIn() {

  const signUp = async (e: React.FormEvent) => {
    // await axios.get('/api/test')
    e.preventDefault()
    const { data, error } = await authClient.signUp.email({
      email: "aryansrivastawa@gmail.com", // user email address
      password: "aryansrivastawa", // user password -> min 8 characters by default
      name: "aryan", // user display name
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

  // const otp = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   const { data, error } = await authClient.emailOtp.sendVerificationOtp({
  //     email: "aaryansrivastawa@gmail.com", // required
  //     type: "email-verification", // required
  //   }, {
  //     onSuccess: (ctx) => {
         
  //     }
  //   });
  //   console.log(data)
  // }

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await axios.get('/api/test-email')
    console.log(result)
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

  // const signIn = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   const data = await authClient.signIn.social({
  //     provider: "google",
  //   }, {
  //     onSuccess: () => {
  //       console.log("Signed in with google successfully")
  //     }
  //   });
  // };

  // const sendVerificationEmail = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   await authClient.sendVerificationEmail({
  //     email: "aryansrivastawa@gmail.com",
  //     callbackURL: "/", // The redirect URL after verification
  //   });
  // }

  return (
    <form onSubmit={(e) => { signUp(e) }} className="flex min-h-screen items-center justify-center font-sans ">
      <input placeholder="email" />
      <input placeholder="password" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">submit</button>
    </form>
  );
}

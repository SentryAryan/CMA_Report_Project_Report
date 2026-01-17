import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { emailOTP } from "better-auth/plugins";
import { sendEmail } from "./mail";

const client = new MongoClient(process.env.MONGODB_URL || "");
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  emailAndPassword: {
    requireEmailVerification: true,
    enabled: true,
    autoSignIn: false
  },
  baseURL: process.env.BETTER_AUTH_URL,
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  secret: process.env.BETTER_AUTH_SECRET!,
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ( { user, url, token }, request) => {
      await sendEmail({
        to: user.email,
        subject: "Verify your email address",
        html: `<p>Click the link to verify your email: ${url}</p>`,
        text: `Click the link to verify your email: ${url}`,
      });
      console.log("Verification email sent successfully")
    },
  },
  // plugins: [
  //   emailOTP({
  //     async sendVerificationOTP({ email, otp, type }) {
  //       console.log(email, otp, type)
  //       let subject: string;
  //       let html: string;

  //       switch (type) {
  //         case "sign-in":
  //           subject = "Your Sign-In Code";
  //           html = `
  //             <h2>Sign In Verification</h2>
  //             <p>Your verification code is: <strong>${otp}</strong></p>
  //             <p>This code will expire in 5 minutes.</p>
  //           `;
  //           break;
  //         case "email-verification":
  //           subject = "Verify Your Email Address";
  //           html = `
  //             <h2>Email Verification</h2>
  //             <p>Your verification code is: <strong>${otp}</strong></p>
  //             <p>Please use this code to complete your email verification.</p>
  //           `;
  //           break;
  //         case "forget-password":
  //           subject = "Password Reset Code";
  //           html = `
  //             <h2>Password Reset</h2>
  //             <p>Your password reset code is: <strong>${otp}</strong></p>
  //             <p>This code will expire in 5 minutes.</p>
  //           `;
  //           break;
  //         default:
  //           subject = "Your Verification Code";
  //           html = `
  //             <p>Your verification code is: <strong>${otp}</strong></p>
  //           `;
  //       }

  //       await sendEmail({
  //         to: email,
  //         subject,
  //         html,
  //       });
  //     },
  //   })
  // ]
});
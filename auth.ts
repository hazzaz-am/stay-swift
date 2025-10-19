import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./lib/db";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/zod";
import { ZodError } from "zod";
import { comparePassword } from "./utils/password";
import { UserModel } from "./models/userModel";



export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: 'jwt',
  },
  adapter: MongoDBAdapter(client),
  providers: [Google, Facebook, Credentials({
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      email: {},
      password: {},
    },
    authorize: async (credentials) => {
      try {
        let user = null;

        await signInSchema.parseAsync(credentials);

        // logic to verify if the user exists
        user = await UserModel.findOne({ email: credentials?.email });

        if (!user) {
          throw new Error("User not found.");
        }

        if (user) {
          const isMatch = await comparePassword(credentials?.password as string, user.password);
          if (!isMatch) {
            throw new Error("Invalid credentials.");
          }
        }

        // return JSON object with the user data
        return user;
      } catch (error) {
        if (error instanceof ZodError) {
          // Return `null` to indicate that the credentials are invalid
          return null;
        }
        return null;
      }
    },
  }),],
  debug: process.env.NODE_ENV === "development",
});
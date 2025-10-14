import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"


 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Facebook],
  debug: process.env.NODE_ENV === "development",
})
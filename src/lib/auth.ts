import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

import type { NextAuthOptions } from "next-auth";
import type { Adapter } from "next-auth/adapters";

import { db } from "./db";
import { loginSchema } from "@/utils/schemas/loginSchema";
import { loginUserUseCase } from "@/server/useCases/loginUserUseCase";
import { updateUser } from "@/server/repositories/user";

export const authOptions = {
  adapter: DrizzleAdapter(db) as Adapter,
  session: { strategy: "jwt" },
  pages: { signIn: "/login", signOut: "/dashboard", error: "/login" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "E-mail", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const fields = loginSchema.parse(credentials);

          const user = await loginUserUseCase(fields);

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  events: {
    async linkAccount({ user }) {
      await updateUser(user.id, { emailVerified: new Date() });
    },
  },
  // callbacks: {
  //   async session({ newSession, session, token, trigger, user }) {
  //     console.log("===================SESSION======================");
  //     console.log("session: ", session);
  //     console.log("user: ", user);
  //     console.log("token: ", token);
  //     console.log("newSession: ", newSession);
  //     console.log("trigger: ", trigger);
  //     console.log("================================================");

  //     return session;
  //   },
  //   async jwt({ token, user, account, profile, trigger, session }) {
  //     console.log("===================TOKEN======================");
  //     console.log("token:", token);
  //     console.log("user:", user);
  //     console.log("account:", account);
  //     console.log("profile:", profile);
  //     console.log("trigger:", trigger);
  //     console.log("session:", session);
  //     console.log("==============================================");

  //     return token;
  //   },
  // },
} satisfies NextAuthOptions;

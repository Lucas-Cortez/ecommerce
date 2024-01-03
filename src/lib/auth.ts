import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

import type { NextAuthOptions } from "next-auth";
import type { Adapter } from "next-auth/adapters";

import { db } from "./db";

export const authOptions = {
  adapter: DrizzleAdapter(db) as Adapter,
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
      async authorize(credentials, req) {
        return null;
      },
    }),
  ],

  session: { strategy: "jwt" },
} satisfies NextAuthOptions;

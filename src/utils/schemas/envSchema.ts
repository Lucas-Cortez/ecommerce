import { z } from "zod";

export const envClientSchema = z.object({});

export const envServerSchema = envClientSchema.extend({
  NEXTAUTH_SECRET: z.string().trim(),
  NEXTAUTH_URL: z.string().trim().url(),
  DATABASE_HOST: z.string().trim(),
  DATABASE_USER: z.string().trim(),
  DATABASE_PASSWORD: z.string().trim(),
  DATABASE_NAME: z.string().trim(),
  GOOGLE_ID: z.string().trim(),
  GOOGLE_SECRET: z.string().trim(),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

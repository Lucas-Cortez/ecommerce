import { envClientSchema, envServerSchema } from "../schemas/envSchema";

const parsedClientEnv = envClientSchema.safeParse(process.env);

if (!parsedClientEnv.success) {
  console.error("\x1b[33m%s\x1b[0m", "❌ Invalid client environment variables:");

  console.log("\x1b[31m%s\x1b[0m", [Object.keys(parsedClientEnv.error.flatten().fieldErrors).join(", ")]);
  throw new Error("Invalid client environment variables");
}

export const envClient = parsedClientEnv.data;

// ===========================================================================================================

const parsedServerEnv = envServerSchema.safeParse(process.env);

if (!parsedServerEnv.success) {
  console.error("\x1b[33m%s\x1b[0m", "❌ Invalid server environment variables:");

  console.log(parsedServerEnv.error.issues);

  console.log("\x1b[31m%s\x1b[0m", [Object.keys(parsedServerEnv.error.flatten().fieldErrors).join(", ")]);
  throw new Error("Invalid server environment variables");
}

export const envServer = parsedServerEnv.data;

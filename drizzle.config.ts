import { envServer } from "@/utils/helpers/env";
import "dotenv/config";

import type { Config } from "drizzle-kit";

export default {
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    host: envServer.DATABASE_HOST as string,
    user: envServer.DATABASE_USER as string,
    password: envServer.DATABASE_PASSWORD as string,
    database: envServer.DATABASE_NAME as string,
  },
} satisfies Config;

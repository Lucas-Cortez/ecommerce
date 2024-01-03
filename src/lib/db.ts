import { envServer } from "@/utils/helpers/env";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  port: 5432,
  host: envServer.DATABASE_HOST,
  user: envServer.DATABASE_USER,
  password: envServer.DATABASE_PASSWORD,
  database: envServer.DATABASE_NAME,
});

await client.connect();

export const db = drizzle(client);

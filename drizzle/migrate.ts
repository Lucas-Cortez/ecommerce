import { migrate } from "drizzle-orm/node-postgres/migrator";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import "dotenv/config";

import { envServerSchema } from "@/utils/schemas/envSchema";

const main = async () => {
  const env = envServerSchema.parse(process.env);

  const client = new Client({
    port: 5432,
    host: env.DATABASE_HOST,
    user: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
  });

  await client.connect();

  const db = drizzle(client, { logger: true });
  await migrate(db, { migrationsFolder: "./drizzle/migrations" });

  await client.end();
};

main();

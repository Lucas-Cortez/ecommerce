import { db } from "@/lib/db";
import { User, UserInsert, users } from "../../../drizzle/schema";
import { eq } from "drizzle-orm";

export const getUserByEmail = async (email: string) => {
  try {
    const selectedUsers = await db.select().from(users).where(eq(users.email, email));

    return selectedUsers[0];
  } catch (error) {
    return null;
  }
};

export const createUser = async (data: UserInsert) => {
  await db.insert(users).values({ ...data });

  return true as const;
};

export const updateUser = async (userId: string, data: Partial<Omit<User, "id">>) => {
  await db.update(users).set(data).where(eq(users.id, userId));
  return true as const;
};

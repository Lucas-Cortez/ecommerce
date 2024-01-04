import bcrypt from "bcrypt";

import { getUserByEmail } from "../repositories/user";
import type { LoginSchemaValues } from "@/utils/schemas/loginSchema";

export const loginUserUseCase = async (input: LoginSchemaValues) => {
  const user = await getUserByEmail(input.email);

  const password = user?.password || "";

  const isPasswordCorrect = await bcrypt.compare(input.password, password);

  if (!isPasswordCorrect || !user) throw new Error("login failed");

  return user;
};

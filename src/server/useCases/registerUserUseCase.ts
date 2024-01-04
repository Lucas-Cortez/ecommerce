import bcrypt from "bcrypt";

import { RegisterSchemaValues } from "@/utils/schemas/registerSchema";
import { createUser, getUserByEmail } from "../repositories/user";

export const registerUserUseCase = async (input: RegisterSchemaValues) => {
  const hashedPassword = await bcrypt.hash(input.password, 10);

  const existingUser = await getUserByEmail(input.email);

  if (existingUser) throw new Error("user already exists");

  createUser({ name: input.name, email: input.email, password: hashedPassword });

  // const verificationToken = await generateVerificationToken(email);
  // await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return true;
};

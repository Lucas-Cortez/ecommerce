import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(1),
    passwordConfirmation: z.string().min(1),
  })
  .refine(({ password, passwordConfirmation }) => password === passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: "passwords don't match",
  });

export type RegisterSchemaValues = z.infer<typeof registerSchema>;

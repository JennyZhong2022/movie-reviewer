import * as z from "zod";

const schema = z
  .object({
    username: z.string().min(6, "Username must be at least 6 characters"),
    email: z.string().email("Email must be a valid email address"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[A-Z]+/, "Password must contain a capital letter")
      .regex(/[0-9]+/, "Password must contain a number"),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Password confirm must match password",
    path: ["passwordConfirm"],
  });

export default schema;

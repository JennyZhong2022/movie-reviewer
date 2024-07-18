import * as z from "zod";

const schema = z.object({
  email: z.string().email("Email must be a valid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]+/, "Password must contain a capital letter")
    .regex(/[0-9]+/, "Password must contain a number"),
});

export default schema;

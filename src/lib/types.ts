import z from "zod";

export const FormSchema = z.object({
  email: z.string().describe("Email").email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(8, "Password is required")
    .max(100)
    .describe("Password"),
});

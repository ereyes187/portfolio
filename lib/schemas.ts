import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, { error: "Name is required" }),
  email: z.email({ error: "Invalid email address" }),
  subject: z.string().min(1, { error: "Subject is required" }),
  message: z.string().min(1, { error: "Message is required" }),
});

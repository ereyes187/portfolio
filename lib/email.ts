"use server";

import z from "zod";
import { formSchema } from "./schemas";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    const { data, error } = await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`,
      to: ["ereyes20981@gmail.com"],
      replyTo: emailFormData.email,
      subject: emailFormData.subject,
      html: `
        <p>Name: ${emailFormData.name}</p>
        <p>Email: ${emailFormData.email}</p>
        <p>Message: </p>
        <p>${emailFormData.message}</p>
      `,
    });

    if (error) {
      throw new Error("Failed to send email via Resend.");
    }

    return data;
  } catch (e) {
    if (e instanceof z.ZodError) {
      throw new Error("Invalid data provided.");
    }

    throw new Error("An unexpected error occurred on the server.");
  }
};

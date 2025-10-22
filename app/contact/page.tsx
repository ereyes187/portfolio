"use client";

import { LuSend } from "react-icons/lu";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/lib/schemas";
import { sendEmail } from "@/lib/email";
import { toast } from "sonner";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await sendEmail(values);
      toast.success("Message sent. I'll get back to you soon.");
      reset();
    } catch (error) {
      toast.error("Failed to send. Please try again.");
    }
  }

  return (
    <main className="relative h-svh flex flex-col gap-y-8 p-6 overflow-y-auto">
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-3xl text-action scroll-m-20 font-bold tracking-tight first:mt-0">
          Contact Me
        </h1>
        <p className="text-lg md:text-xl scroll-m-20 font-extralight tracking-tight first:mt-0">
          Have a question, problem, or project? Let's talk
        </p>
      </div>
      <section aria-label="Contact Section">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-12 gap-4 w-full"
        >
          <div className="md:col-span-4 col-span-12 row-start-1">
            <input
              {...register("name")}
              className="w-full px-4 py-4 bg-glass rounded-lg border border-trim focus:outline-none focus:ring-1 focus:ring-action"
              placeholder="Name"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-action">{errors.name.message}</p>
            )}
          </div>

          <div className="md:col-span-4 col-span-12 row-start-2">
            <input
              {...register("email")}
              className="w-full px-4 py-4 bg-glass rounded-lg border border-trim focus:outline-none focus:ring-1 focus:ring-action"
              placeholder="Email address"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-action">{errors.email.message}</p>
            )}
          </div>

          <div className="md:col-span-4 col-span-12 row-start-3">
            <input
              {...register("subject")}
              className="w-full px-4 py-4 bg-glass rounded-lg border border-trim focus:outline-none focus:ring-1 focus:ring-action"
              placeholder="Subject"
            />
            {errors.subject && (
              <p className="mt-2 text-sm text-action">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="md:col-span-8 col-span-12 md:row-span-3 row-span-1">
            <textarea
              {...register("message")}
              className="w-full h-full px-4 py-4 bg-glass rounded-lg border border-trim focus:outline-none focus:ring-1 focus:ring-action resize-none"
              placeholder="Your message"
            />
            {errors.message && (
              <p className="mt-2 text-sm text-action">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="col-span-12 flex gap-6 justify-end">
            <button
              type="submit"
              className="group cursor-pointer font-medium px-4 py-2 md:px-6 md:py-3 flex flex-row justify-center items-center gap-2 bg-glass border border-trim rounded-lg hover:bg-highlight hover:text-action"
            >
              Send Email
              <LuSend className="group-hover:translate-x-2 group-hover:translate-y-[-2px] transition duration-300" />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

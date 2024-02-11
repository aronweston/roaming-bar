"use client";
import { NewsletterSchema } from "@/lib/schema";
import { Maybe } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import Image from "next/image";

import fingerPointing from "@/assets/images/finger-pointing.png";

// import klayvioSignUp from "~/server/actions/klayvioSignUp";

type Status = { status: string; message: string };

export default function FooterNewsletter() {
  const form = useForm<NewsletterSchema>({
    mode: "all",
    resolver: zodResolver(NewsletterSchema),
    shouldFocusError: true,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const [status, setStatus] = useState<Maybe<Status>>(null);

  const onSubmit = handleSubmit(async (input: NewsletterSchema) => {
    setStatus(null);
    // const response = await klayvioSignUp(input);
    // const { status, message } = response;
    // setStatus({ status, message });
  });

  return (
    <section className="v-stack w-full">
      {status?.status === "success" ? (
        <div className="v-stack border flex-start p-4">
          <div className="h-stack">
            <p>You&apos;re subscribed!</p>
            <CheckCircle />
          </div>

          <p className="text-sm">
            Thank you for joining our community. Get ready for exclusive insights and updates coming
            your way. Check your inbox for our welcome email and more exciting content!
          </p>
        </div>
      ) : (
        <Form form={form} onSubmit={onSubmit}>
          <FormItem className="v-stack">
            <FormLabel className="text-xl">
              We send <span className="italic">great</span> emails!
            </FormLabel>
            <FormControl>
              <div className="v-stack gap-3 w-full max-w-sm items-start">
                <Input type="email" placeholder="Email" />

                <Button
                  className="w-1/2 justify-center self-start"
                  type="submit"
                  isLoading={isSubmitting}>
                  Subscribe
                </Button>

                <Image className="self-start" alt="hand pointing right" {...fingerPointing} />
              </div>
            </FormControl>

            <FormMessage />
          </FormItem>

          {status?.status && <p className="">{status.message}</p>}
        </Form>
      )}
    </section>
  );
}

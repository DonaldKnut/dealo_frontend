"use client";
import React, { useState } from "react";
import Heading from "../heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChatCompletionRequestMessage } from "openai";

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];
      const response = await axios.post("/api/messages", {
        messages: newMessages,
      });

      setMessages((currentMessages) => [
        ...currentMessages,
        userMessage,
        response.data,
      ]);
      form.reset();
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle error here, e.g., set an error state and display it to the user
    } finally {
      // You may not need to refresh the router here unless it's necessary
      // router.refresh();
    }
  };

  const handleGenerateClick = () => {
    form.handleSubmit(onSubmit)();
  };

  return (
    <div className="md:pl-72 pt-24">
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-green-500"
        bgColor="bg-green-600/10"
      />
      <div className="px-4 lg:px-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg border outline-none w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-none outline-none focus:visible:ring-0 focus:ring-transparent"
                      disabled={isLoading}
                      placeholder="How do I calculate the radius of a circle?"
                      style={{ outline: "none" }}
                      {...form}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="col-span-12 lg:col-span-2 w-full"
              disabled={isLoading}
              variant="secondary"
              onClick={handleGenerateClick}
            >
              Generate
            </Button>
          </form>
        </Form>
      </div>
      <div className="space-y-4 mt-4 text-white text-center">
        <div className="flex flex-col-reverse gap-y-4">
          {messages.map((message, index) => (
            <div key={index}>{message.content}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

"use client";
import { Card } from "@/components/ui/Card";
import { Code, Image, MessageSquare, Music, Video } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {};

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-green-500",
    bgColor: "bg-green-600",
    href: "/create/message",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-green-500",
    bgColor: "bg-green-600",
    href: "/create/music",
  },
  {
    label: "Image Generation",
    icon: Image,
    color: "text-green-500",
    bgColor: "bg-green-600",
    href: "/create/image",
  },
  {
    label: "Video Generation",
    icon: Video,
    color: "text-green-500",
    bgColor: "bg-green-600",
    href: "/create/video",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-500",
    bgColor: "bg-green-600",
    href: "/create/code",
  },
];

const page = (props: Props) => {
  const router = useRouter();
  return (
    <div className="md:pl-72 pt-24">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground text-white font-light text-sm md:text-lg text-center mt-2 mb-2">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-green/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semi-bold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;

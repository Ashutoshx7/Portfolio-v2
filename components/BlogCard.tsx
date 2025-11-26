"use client";
import Icons from "./Icons";
import { Icon } from "./ui/evervault-card";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

interface BlogCardProps {
  status: "Ready" | "In Production";
  githubLink: string;
  siteLink?: string;
  description: string;
  title: string;
  imageSrc: string;
  videoSrc?: string;
  techStack: { name: string; path: string; darkPath?: string }[];
}
export function BlogCard(props: BlogCardProps) {
  return (
    <div className="border  border-black/20 dark:border-white/20 flex flex-col items-start max-w-md mx-auto p-4 relative ">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <div className="relative bg-blend-overlay ">
       <img src="/image.png" alt="" />
      </div>
      <h2 className="text-2xl font-bold mt-4 mb-2  font-serif underline underline-offset-3 italic">
        {props.title}
      </h2>{" "}
      <p className="text-sm text-gray-600 dark:text-gray-300 w-[400px] font-mono">
        {props.description}
      </p>
    </div>
  );
}

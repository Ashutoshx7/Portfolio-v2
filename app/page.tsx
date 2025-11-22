import Avatar from "@/components/Avatar";
import { Card } from "@/components/Card";
import Image from "next/image";
import Graph from "@/components/Graph";
import Tech from "@/components/Tech";
import ThemeToggle from "@/components/theme-toggle";
import Hero from "@/components/Hero";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Home() {
  const techStack = [
    { name: "Node.js", path: "/icons/node.svg" },
    { name: "Typescript", path: "/icons/ts.svg" },
    {
      name: "Next.js",
      path: "/icons/nextjslight.svg",
    },
    { name: "Digital Ocean", path: "/icons/ocean.svg" },
    { name: "Docker", path: "/icons/docker.svg" },
    { name: "Redis", path: "/icons/redis.svg" },
  ];

  return (
    <div className="flex flex-col justify-start items-center min-h-screen py-2 mt-30">
      <Hero />
      <SmoothCursor />
      <div className="grid grid-cols-2 gap-10 mt-10">
        <Card
          title="Project 1"
          description="A brief description of Project 1."
          status="Ready"
          githubLink="#"
          imageSrc="/image.png"
          techStack={techStack}
          siteLink="#"
        />
        <Card
          title="Project 2"
          description="A brief description of Project 2."
          status="In Production"
          githubLink="#"
          imageSrc="/image.png"
          techStack={techStack}
        />
      </div>
      <Graph />
    </div>
  );
}

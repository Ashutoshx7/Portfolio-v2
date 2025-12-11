import React from "react";
import { Icon } from "./ui/evervault-card";
import Icons from "./Icons";
import Nextjs from "@/icons/Nextjs";
import Py from "@/icons/Py";
import NodeIcon from "@/icons/NodeIcon";
import Ts from "@/icons/Ts";
import ReactIcon from "@/icons/ReactIcon";
import DockerIcon from "@/icons/DockerIcon";
import GitIcon from "@/icons/GitIcon";
import Prisma from "@/icons/Prisma";
import RedisIcon from "@/icons/RedisIcon";
import TailwindIcon from "@/icons/TailwindIcon";
import Mongo from "@/icons/Mongo";
import Bun from "@/icons/Bun";
import GoIcon from "@/icons/GoIcon";

const Skills = () => {
  return (
    <div className="w-full mb-30">
      <div className="mb-10">
        <p className="font-mono text-sm">Featured</p>
        <h1 className="font-serif  text-4xl tracking-tight font-black border-b border-black dark:border-white/40 w-fit border-dashed">
          My Skillset
        </h1>
      </div>
      <div className="border  border-black/20 dark:border-white/10 w-full max-w-4xl mx-auto p-4 pb-7 relative flex flex-wrap gap-4 justify-center items-center">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        {[
          {
            name: "Typescript",
            icon: <Ts />,
            className: "w-27",
            link: "https://www.typescriptlang.org/",
          },
          {
            name: "Node.js",
            icon: <NodeIcon />,
            className: "w-22",
            link: "https://nodejs.org/",
          },
          {
            name: "Next.js",
            icon: <Nextjs />,
            className: "w-22",
            link: "https://nextjs.org/",
          },
          {
            name: "Python",
            icon: <Py />,
            className: "w-22",
            link: "https://www.python.org/",
          },
          {
            name: "React",
            icon: <ReactIcon />,
            className: "w-27",
            link: "https://react.dev/",
          },
          {
            name: "Docker",
            icon: <DockerIcon />,
            className: "w-22",
            link: "https://www.docker.com/",
          },
          {
            name: "Git",
            icon: <GitIcon />,
            className: "w-22",
            link: "https://git-scm.com/",
          },
          {
            name: "Prisma",
            icon: <Prisma />,
            className: "w-22",
            link: "https://www.prisma.io/",
          },
          {
            name: "Redis",
            icon: <RedisIcon />,
            className: "w-27",
            link: "https://redis.io/",
          },
          {
            name: "Tailwind css",
            icon: <TailwindIcon />,
            className: "w-22",
            link: "https://tailwindcss.com/",
          },
          {
            name: "Golang",
            icon: <GoIcon />,
            className: "w-22",
            link: "https://go.dev/",
          },
          {
            name: "MongoDB",
            icon: <Mongo />,
            className: "w-22",
            link: "https://www.mongodb.com/",
          },
          {
            name: "Bun",
            icon: <Bun />,
            className: "w-22",
            link: "https://bun.sh/",
          },
        ].map(({ name, icon, className, link }) => (
          <Icons key={name} name={name} className={className} link={link}>
            {icon}
          </Icons>
        ))}
      </div>
    </div>
  );
};

export default Skills;

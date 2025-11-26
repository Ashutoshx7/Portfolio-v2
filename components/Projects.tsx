import { Card } from "./Card";
import { SquareArrowOutUpRightIcon } from "lucide-react";
import Icons from "./Icons";
import Nextjs from "@/icons/Nextjs";
import NodeIcon from "@/icons/NodeIcon";
import Ts from "@/icons/Ts";

const Projects = () => {
  const techStack = [
    { name: "Node.js", children: <NodeIcon /> },
    { name: "Typescript", children: <Ts /> },
    {
      name: "Next.js",
      children: <Nextjs />,
    },
  ];

  return (
    <div className="mt-5 mb-30 relative">
      <div className="flex flex-col gap-1 text-neutral-900 dark:text-neutral-50/70">
        <p className="text-sm font-mono ">Featured</p>
        <h2 className="text-4xl font-black font-serif  border-b border-black dark:border-white/40 w-fit border-dashed">
          Projects
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-10 mt-10">
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
      <a
        className="flex gap-2 items-center text-lg border w-[220px] dark:border-white/60  px-4 py-1 border-dashed mt-10  border-black/40  duration-300 dark:hover:bg-neutral-900 hover:bg-neutral-100 "
        href="/Project"
      >
        {" "}
        Checkout Projects <SquareArrowOutUpRightIcon size={20} />
      </a>

      <span className="flex items-center mt-20">
        <span className="h-px flex-1 bg-linear-to-r from-transparent to-neutral-400"></span>
        <span className="h-px flex-1 bg-linear-to-l from-transparent to-neutral-400"></span>
      </span>
    </div>
  );
};

export default Projects;

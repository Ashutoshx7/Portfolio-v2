import Avatar from "@/components/Avatar";
import { Card } from "@/components/Card";
import Image from "next/image";
import Graph from "@/components/Graph";

import Hero from "@/components/Hero";

import Projects from "@/components/Projects";
import { BlogCard } from "@/components/BlogCard";

export default function Home() {
  
  return (
    <div className="flex flex-col justify-start items-center min-h-screen py-2 mt-30">
      <Hero />
     
      <Projects />  
      <Graph />
     <BlogCard
       status="Ready"
       githubLink="https://github.com/example/repo"
       siteLink="https://example.com"
       description="This is a sample blog card description."
       title="Sample Blog Card"
       imageSrc="/images/sample.jpg"
       videoSrc="/videos/sample.mp4"
       techStack={[
         { name: "React", path: "/icons/react.svg" },
         { name: "TypeScript", path: "/icons/ts.svg" }
       ]}
     />
    </div>
  );
}

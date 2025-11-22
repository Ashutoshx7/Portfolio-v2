import Avatar from "@/components/Avatar";
import { Card } from "@/components/Card";
import Image from "next/image";
import Graph from "@/components/Graph";

import Hero from "@/components/Hero";

import Projects from "@/components/Projects";

export default function Home() {
  
  return (
    <div className="flex flex-col justify-start items-center min-h-screen py-2 mt-30">
      <Hero />
     
      <Projects />  
      <Graph />
    </div>
  );
}

import Avatar from "@/components/Avatar";
import { Card } from "@/components/Card";
import Image from "next/image";
import Graph from "@/components/Graph";
import Tech from "@/components/Tech";
import ThemeToggle from "@/components/theme-toggle";
import Hero from "@/components/Hero";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Projects from "@/components/Projects";

export default function Home() {
  
  return (
    <div className="flex flex-col justify-start items-center min-h-screen py-2 mt-30">
      <Hero />
      <SmoothCursor />
      <Projects />  
      <Graph />
    </div>
  );
}

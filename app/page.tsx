import Avatar from "@/components/Avatar";
import { Card } from "@/components/Card";

import Graph from "@/components/Graph";
import Tech from "@/components/Tech";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2 bg-neutral-100">
      <Graph />

      <div className="flex gap-3">
        <Avatar />

        <div>
          <p className="text-2xl font-serif font-black flex items-center ">
            Hi , <span className="">I'm Piyush Rathore</span> , a Full Stack
            Developer!
          </p>

          <div className="font-mono ">
            specializing in building robust and scalable web applications using
            <br />
            <div className="flex items-center gap-3">
              <span>typescript and python & deploying them on</span>{" "}
              <Tech logo="/icons/vercel.svg" name="Vercel" className=" w-20" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 ">
        {" "}
        <Card imageSrc="/image.png" techStack={} />
        <Card imageSrc="/image.png" />
        <Card imageSrc="/image.png" />
        <Card imageSrc="/image.png" />
      </div>
    </div>
  );
}

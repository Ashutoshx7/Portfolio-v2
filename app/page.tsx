import Avatar from "./components/Avatar";

import Graph from "./components/Graph";
import Tech from "./components/Tech";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2 bg-neutral-950">
    <Graph/>
    <Avatar/>
    <Tech logo="/icons/vercel.svg" name="Vercel"/>
    </div>
  );
}

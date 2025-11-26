import { SquareArrowOutUpRightIcon } from 'lucide-react';
import React from 'react'
import { BlogCard } from './BlogCard';

const Blogs = () => {
  return (
    <div className="mt-20">
      <p className="font-mono text-sm">Featured</p>
      <h2 className="text-4xl font-black font-serif  border-b border-black dark:border-white/40 w-fit border-dashed tracking-wide  ">
        Blogs
      </h2>

      <div className="flex items-center gap-10 mt-10">
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
            { name: "TypeScript", path: "/icons/ts.svg" },
          ]}
        />
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
            { name: "TypeScript", path: "/icons/ts.svg" },
          ]}
        />
      </div>
      <a
        className="flex gap-2 items-center mx-auto text-lg border w-fit dark:border-white/60  px-4 py-1 border-dashed mt-10  border-black/40  duration-300 dark:bg-neutral-900 bg-neutral-100 hover:dark:bg-neutral-950 hover:bg-neutral-200 "
        href="/Project"
      >
        {" "}
        Checkout Blogs <SquareArrowOutUpRightIcon size={20} />
      </a>
    </div>
  );
}

export default Blogs
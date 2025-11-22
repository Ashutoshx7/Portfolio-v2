import React from 'react'
import Tech from './Tech'
import Avatar from './Avatar'

const Hero = () => {
  return (
   <div className="flex gap-3 justify-start ">
           <div className=" mr-10 mb-10 mt-2 -ml-7">
             <Avatar />
           </div>
            
           <div>
             <p className="text-[45px] leading-tight font-serif tracking-wider font-bold flex items-center gap-4">
               Hi , I'm Piyush{" "}
               <span className="mx -3 "> — A Full Stack Developer!</span>
             </p>
   
             <div className="font-sans text-neutral-400 text-lg  ">
               <span className="flex items-center gap-2">
                 I build interactive web apps using{" "}
                 <Tech logo="/icons/ts.svg" name="Typescript" className="w-27 " />
                 ,
                 <Tech
                   logo="/icons/node.svg"
                   name="Node.js"
                   className=" w-22 "
                 />{" "}
                 ,
                 <Tech
                   logo="/icons/nextjslight.svg"
                   name="Next.js"
                   className=" w-22 "
                 />{" "}
                 ,
               </span>
               <span className="flex items-center gap-2 mt-1 mb-1">
                 <Tech logo="/icons/python.svg" name="Python" className=" w-22 " />
                 <span>
                   with the focus on{" "}
                   <span className="dark:text-white font-semibold text-neutral-500">Backend</span> side.
                 </span>
               </span>
               Enthusiastic about AI and Open Source Contribution.
             </div>
           </div>
         </div>
  )
}

export default Hero
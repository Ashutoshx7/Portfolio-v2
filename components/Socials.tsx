import React from "react";
import Icons from "./Icons";
import GithubIcon from "@/icons/GithubIcon";
import LinkedinIcon from "@/icons/LinkedinIcon";

const Socials = () => {
  return (
    <div className="lg:w-138 flex gap-3 ml-[185px] ">
      <Icons
      name="GitHub"
      link="https://github.com/Piyushrathoree"
      
      >
      <GithubIcon  />
      </Icons>
      <Icons
      name="GitHub"
      link="https://Linkedin.com/in/piyushrathore--"
     
      >
      <LinkedinIcon className="h-7 w-7"/>
      </Icons>
     
    </div>
  );
};

export default Socials;

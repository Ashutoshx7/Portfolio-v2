import React from "react";

import { SOCIAL_LINKS } from "@/data/Social-item";
import { Panel } from "./Panel";
import { SocialLinkItem } from "./Social-Link-item";

export function SocialLinks() {
  return (
    <Panel className="sm:px-8 sm:w-230 border-none ">
     

      <div className="relative">
      

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
          {SOCIAL_LINKS.map((link, index) => {
            return <SocialLinkItem key={index} {...link} />;
          })}
        </div>
      </div>
    </Panel>
  );
}

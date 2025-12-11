"use client";

import React from "react";
import Container from "@/components/containers";
import { ContactForm } from "@/components/ContactForm";
import { ContactOptions } from "@/components/ContactOptions";

const ContactPage = () => {
  return (
    <Container className="min-h-screen pt-35 pb-20 px-4 sm:px-10 sm:w-230 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-x border-dashed border-neutral-300 dark:border-neutral-700">
        {/* Left Column: Header & Options */}
        <div className="flex flex-col p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-dashed border-neutral-300 dark:border-neutral-700">
          <div className="mb-12">
            <h1 className="font-serif text-5xl md:text-6xl font-black tracking-tighter text-neutral-900 dark:text-neutral-50 mb-6">
              Contact<span className="text-neutral-400">.</span>
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
              Let's build something extraordinary together. I'm always open to
              discussing new projects, creative ideas, or opportunities to be
              part of your visions.
            </p>
          </div>

          <ContactOptions />
        </div>

        {/* Right Column: Form */}
        <div className="p-8 md:p-12">
          <h2 className="text-xl font-bold font-serif mb-8 text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
            <span className="w-1 h-1 bg-neutral-900 dark:bg-neutral-50 rounded-full"></span>{" "}
            Drop a message
          </h2>
          <ContactForm />
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;

"use client";

import React from "react";
import { RippleButton } from "@/components/ui/ripple-button";
import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-serif text-4xl  font-medium tracking-tighter text-neutral-900 dark:text-neutral-50 leading-[0.9]">
       Send me a message 
      </h1>
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="What's your name?"
            className="w-full bg-neutral-100 dark:bg-neutral-800/50 border-transparent focus:border-neutral-300 dark:focus:border-neutral-700 px-6 py-4 text-lg text-neutral-900 dark:text-neutral-50 focus:outline-none focus:ring-0 transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-600 rounded-lg"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your email address"
            className="w-full bg-neutral-100 dark:bg-neutral-800/50 border-transparent focus:border-neutral-300 dark:focus:border-neutral-700 px-6 py-4 text-lg text-neutral-900 dark:text-neutral-50 focus:outline-none focus:ring-0 transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-600 rounded-lg"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={6}
            placeholder="Tell me about your project..."
            className="w-full bg-neutral-100 dark:bg-neutral-800/50 border-transparent focus:border-neutral-300 dark:focus:border-neutral-700 px-6 py-4 text-lg text-neutral-900 dark:text-neutral-50 focus:outline-none focus:ring-0 transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-600 resize-none rounded-lg"
            required
          />
        </div>

        <div className="pt-2">
          <RippleButton
            rippleColor="#ffffff"
            className="w-full rounded-lg bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 h-14 shadow-xl shadow-neutral-200 dark:shadow-neutral-900/50"
          >
            <span className="flex items-center justify-center gap-2 font-medium text-lg">
              Send Message <Send size={18} />
            </span>
          </RippleButton>
        </div>
      </form>
    </div>
  );
}

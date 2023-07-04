"use client";
import { ArrowRight, Github, Twitter } from "lucide-react";
import { BACKGROUND_OPTIONS } from "./components/background";
import { Button } from "@/components/ui/button";
import Playground from "./components/playground";
import { useState } from "react";

export default function Home() {
  const [preview, setPreview] = useState<any>(null);

  return (
    <div>
      <div className="fixed top-0 left-0 -z-10 w-full h-full">
        {preview ? preview : null}
      </div>
      <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
        <header className="flex items-center justify-between py-8">
          <div />
          <nav className="flex gap-6">
            <a
              href="https://twitter.com/Ibelick"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Twitter
                className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600"
                strokeWidth={1.5}
              />
            </a>
            <a
              href="https://github.com/ibelick/sections-snippets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Github
                className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600"
                strokeWidth={1.5}
              />
            </a>
          </nav>
        </header>
        <div className="pt-8">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <div className="mb-8 flex">
              <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-3xl">
                  New snippets ⚡️
                  <span className="inline-flex items-center pl-2 text-black">
                    Read more{" "}
                    <ArrowRight className="pl-0.5 text-black" size={16} />
                  </span>
                </div>
              </span>
            </div>
            <h2 className="text-center text-3xl font-medium text-gray-900 sm:text-6xl dark:text-gray-50">
              Collection of modern,{" "}
              <span className="leading-tight inline-flex animate-text-gradient bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-transparent">
                background snippets
              </span>
            </h2>
            <p className="mt-6 text-center text-lg leading-6 text-gray-600">
              Easy to use, copy and paste background snippets for your next
              project. All snippets are built with Vanilla CSS and Tailwind CSS
              and are production-ready.
            </p>
            <div className="mt-10 flex gap-4">
              <Button>Get Started</Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden py-32 px-10">
          <div className="grid grid-cols-2 gap-4 pb-4">
            {BACKGROUND_OPTIONS.map((background, index) => {
              return (
                <Playground key={index} setPreview={setPreview}>
                  {background}
                </Playground>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

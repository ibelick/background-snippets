"use client";
import { ArrowRight, Github, Twitter } from "lucide-react";
import { BACKGROUND_OPTIONS } from "./components/background";
import { Button } from "@/components/ui/button";
import Playground from "./components/playground";
import { useState } from "react";
import { Toaster } from "sonner";

export default function Home() {
  const [preview, setPreview] = useState<null | React.ReactNode>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const resetBg = () => {
    setPreview(null);
    setTheme("light");
  };

  return (
    <>
      {/* @todo: maybe toast top right and go top button on bottom right */}
      <Toaster />
      <div className={`${theme}`}>
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
                  className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
                  strokeWidth={1.5}
                />
              </a>
              <a
                href="https://github.com/ibelick/background-snippets"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Github
                  className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
                  strokeWidth={1.5}
                />
              </a>
            </nav>
          </header>
          <div className="pt-8">
            <div className="relative mx-auto flex max-w-2xl flex-col items-center">
              <div className="mb-8 flex">
                <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:text-slate-200 dark:bg-black">
                    New snippets ⚡️
                    <span className="inline-flex items-center pl-2 text-black dark:text-white">
                      Read more{" "}
                      <ArrowRight className="pl-0.5 text-black" size={16} />
                    </span>
                  </div>
                </span>
              </div>
              <h2 className="text-center text-3xl font-medium text-gray-900 sm:text-6xl dark:text-gray-50">
                Collection of modern,{" "}
                <span className="leading-tight inline-flex animate-text-gradient bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                  background snippets
                </span>
              </h2>
              <p className="mt-6 text-center text-lg leading-6 text-gray-600 dark:text-gray-200">
                Easy to use, copy and paste background snippets for your next
                project. All snippets are built with Tailwind CSS and{" "}
                <span className="opacity-70 cursor-wait">Vanilla CSS</span>
              </p>
              <div className="mt-10 flex gap-4">
                <a
                  href="https://github.com/ibelick/background-snippets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Button>
                    Go to GitHub <ArrowRight className="pl-0.5" size={16} />
                  </Button>{" "}
                </a>
                <Button variant="secondary" onClick={resetBg}>
                  Reset background
                </Button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden pt-52 px-10 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-6">
              {BACKGROUND_OPTIONS.map((background, index) => {
                return (
                  <Playground
                    key={index}
                    setPreview={setPreview}
                    theme={background.theme}
                    setTheme={setTheme}
                  >
                    {background.component}
                  </Playground>
                );
              })}
            </div>
          </div>
          <footer>
            <div className="flex items-center justify-center py-8">
              <span className="text-sm text-neutral-800 dark:text-neutral-200">
                Made by
                <a
                  href="https://twitter.com/Ibelick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-neutral-950 dark:text-neutral-100"
                >
                  @Ibelick
                </a>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

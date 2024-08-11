'use client';
import { ArrowRight, Github, Twitter, Sun, Moon } from 'lucide-react';

import { BACKGROUND_OPTIONS } from './components/background';
import { Button } from '@/components/ui/button';
import Playground from './components/playground';
import { useState, ReactNode } from 'react';
import { Toaster } from 'sonner';

type Theme = 'light' | 'dark';

export default function Home() {
  const [preview, setPreview] = useState<ReactNode | null>(null);
  const [theme, setTheme] = useState<Theme>('light');

  const resetBg = () => {
    setPreview(null);
    setTheme('light');
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Toaster />
      <div className={`${theme}`}>
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          {preview ? preview : null}
        </div>
        <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
          <header className="flex items-center justify-between py-8">
            <div>
              <h1 className={`font-semibold text-md px-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Modern Bg
              </h1>
            </div>
            <nav className="flex items-center gap-6">
              <a
                href="https://twitter.com/MK__0168"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Twitter
                  className={`h-6 w-6 ${theme === 'dark' ? 'text-gray-200 hover:text-gray-400' : 'text-gray-800 hover:text-gray-600'}`}
                  strokeWidth={1.5}
                />
              </a>
              <a
                href="https://github.com/mk016"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Github
                  className={`h-6 w-6 ${theme === 'dark' ? 'text-gray-200 hover:text-gray-400' : 'text-gray-800 hover:text-gray-600'}`}
                  strokeWidth={1.5}
                />
              </a>
              <div className="relative">
                <Button
                  variant="outline"
                  onClick={toggleTheme}
                  className={`flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                >
                  {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                  <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                </Button>
              </div>
            </nav>
          </header>
          <div className="pt-8">
            <div className="relative mx-auto flex max-w-2xl flex-col items-center">
              <div className="mb-8 flex">
                <a
                  href="https://github.com/mk016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                    <span className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${theme === 'dark' ? 'bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]' : 'bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)]'}`} />
                    <div className={`inline-flex h-full w-full cursor-pointer justify-center rounded-full ${theme === 'dark' ? 'bg-black text-gray-200' : 'bg-white text-gray-600'} px-3 py-1 text-xs font-medium leading-5 backdrop-blur-xl`}>
                      New snippets ⚡️
                      <span className={`inline-flex items-center pl-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        Read more{' '}
                        <ArrowRight
                          className={`pl-0.5 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                          size={16}
                        />
                      </span>
                    </div>
                  </span>
                </a>
              </div>
              <h2 className={`text-center text-3xl font-medium ${theme === 'dark' ? 'text-gray-50' : 'text-gray-900'} sm:text-6xl`}>
                Collection of modern,{' '}
                <span className={`animate-text-gradient inline-flex bg-gradient-to-r ${theme === 'dark' ? 'from-neutral-100 via-slate-600 to-neutral-400' : 'from-neutral-900 via-slate-500 to-neutral-500'} bg-[200%_auto] bg-clip-text leading-tight text-transparent`}>
                  background snippets
                </span>
              </h2>
              <p className={`mt-6 text-center text-lg leading-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
                50+ Ready-to-use, simply copy and paste into your next project. All
                snippets crafted with Tailwind CSS and{' '}
                <span className="cursor-wait opacity-70">Vanilla CSS</span> for
                easy integration.
              </p>
              <div className="mt-10 flex gap-4">
                <a
                  href="https://github.com/mk016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Button>
                    Go to Github <ArrowRight className="pl-0.5" size={16} />
                  </Button>
                </a>
                <Button variant="secondary" onClick={resetBg}>
                  Reset background
                </Button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden px-4 pb-20 pt-52 md:px-10">
            <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
              {BACKGROUND_OPTIONS.map((background, index) => (
                <Playground
                  key={index}
                  setPreview={setPreview}
                  theme={background.theme as Theme} // Ensure theme is of type 'Theme'
                  setTheme={setTheme}
                >
                  {background.component}
                </Playground>
              ))}
            </div>
            <div className={`inline-flex max-w-2xl rounded-md border ${theme === 'dark' ? 'border-neutral-900 bg-black text-neutral-200' : 'border-neutral-200 bg-white text-neutral-900'} p-2 text-sm`}>
              {`These backgrounds are made for a full page background. The preview
              can be different from the actual result. Click on preview to test
              it. And don't forget to tweak it to your needs.`}
            </div>
          </div>
          <footer>
            <div className="flex items-center justify-center py-8">
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-neutral-800'}`}>
                Made by
                <a
                  href="https://twitter.com/MK__0168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ml-1 ${theme === 'dark' ? 'text-gray-100' : 'text-neutral-950'}`}
                >
                  @Mk016
                </a>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

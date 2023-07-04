import { ArrowRight } from "lucide-react";
import BackgroundPage from "./components/background";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
      {/* <div className="bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] py-24"> */}
      <div className="py-24">
        <div className="relative mx-auto flex max-w-2xl flex-col items-center">
          {/* <div className="absolute -z-10 h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" /> */}
          <div className="mb-8 flex">
            <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f97316_0%,#ef4444_50%,#f97316_100%)]" />
              <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-3xl">
                We are now in Early Access
                <span className="inline-flex items-center pl-2 text-black">
                  Read more{" "}
                  <ArrowRight className="pl-0.5 text-black" size={16} />
                </span>
              </div>
            </span>
          </div>
          <h2 className="text-center text-3xl font-medium text-gray-900 sm:text-6xl">
            Collection of modern,{" "}
            <span className="inline-flex animate-text-gradient bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-[200%_auto] bg-clip-text text-transparent">
              website sections
            </span>
          </h2>
          <p className="mt-6 text-center text-lg leading-6 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            necessitatibus incidunt ut officiis explicabo inventore.
          </p>
          <div className="mt-10 flex gap-4">
            <Button>Get Started</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
      </div>
      <BackgroundPage />
    </div>
  );
}

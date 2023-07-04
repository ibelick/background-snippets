import Playground from "./playground";
import { CSSProperties } from "react";

const FullDotBackground = () => {
  return (
    <div
      className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"
      style={
        {
          "--mask-offset": "50px",
          mask: "linear-gradient(to bottom,transparent,#fff var(--mask-offset) calc(100% - var(--mask-offset)),transparent),linear-gradient(to right,transparent,#fff var(--mask-offset) calc(100% - var(--mask-offset)),transparent)",
        } as CSSProperties
      }
    />
  );
};

const DotBackgroundWithGradient = () => {
  return (
    <div
      className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"
      style={
        {
          "--mask-offset": "50px",
          mask: "linear-gradient(to bottom,transparent,#fff var(--mask-offset) calc(100% - var(--mask-offset)),transparent),linear-gradient(to right,transparent,#fff var(--mask-offset) calc(100% - var(--mask-offset)),transparent)",
          "-webkit-mask":
            "linear-gradient(to bottom,transparent,#fff var(--mask-offset) calc(100% - var(--mask-offset)),transparent),linear-gradient(to right,transparent,#fff var(--mask-offset) calc(100% - var(--mask-offset)),transparent)",
          "mask-composite": "intersect",
          "-webkit-mask-composite": "source-in, xor",
        } as CSSProperties
      }
    />
  );
};

const GridBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
  );
};

const GridBackgroundWithGradient = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
    </div>
  );
};

const BackgroundRadialGradientDark = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
  );
};

const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
  );
};

const BackgroundBgSmallGradient = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]" />
  );
};

const BackgroundBgSmallGradient2 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
  );
};

const BackgroundBgSmallGradient3 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
  );
};

const BackgroundBgSmallGradient4 = () => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full">
      <div className="absolute bottom-auto left-auto right-0 top-0 !h-[500px] !w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
    </div>
  );
};

const BackgroundGradient5 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
  );
};

const BackgroundGradient6 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]" />
  );
};

const BackgroundDots1 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#011440] bg-[radial-gradient(#ffffff33_1px,#011440_1px)] bg-[size:20px_20px]" />
  );
};

const BackgroundPage = () => {
  return (
    <div className="flex flex-col gap-12 pb-20">
      <Playground name="dot background">
        <FullDotBackground />
      </Playground>
      <Playground name="dot background with gradient">
        <DotBackgroundWithGradient />
      </Playground>
      <Playground name="grid background">
        <GridBackground />
      </Playground>
      <Playground name="grid background with gradient">
        <GridBackgroundWithGradient />
      </Playground>
      <Playground name="background gradient dark">
        <BackgroundRadialGradientDark />
      </Playground>
      <Playground name="background grid">
        <BackgroundGrid />
      </Playground>
      <Playground name="background bg small gradient">
        <BackgroundBgSmallGradient />
      </Playground>
      <Playground name="background bg small gradient 2">
        <BackgroundBgSmallGradient2 />
      </Playground>
      <Playground name="background bg small gradient 3">
        <BackgroundBgSmallGradient3 />
      </Playground>
      <Playground name="background bg small gradient 4">
        <BackgroundBgSmallGradient4 />
      </Playground>
      <Playground name="background bg gradient">
        <BackgroundGradient5 />
      </Playground>
      <Playground name="background bg gradient 2">
        <BackgroundGradient6 />
      </Playground>
      <Playground name="background dots 1">
        <BackgroundDots1 />
      </Playground>
    </div>
  );
};

export default BackgroundPage;

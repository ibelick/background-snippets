const Background1 = () => {
  return (
    <div className="bg-white absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
  );
};

// @todo: need to work on this
const Background2 = () => {
  return (
    <div
      className="bg-white absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
      style={
        {
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        } as React.CSSProperties
      }
      // style={
      //   {
      //     "--mask-offset": "50px",
      //     mask: "linear-gradient(to bottom,transparent,#fff var(--mask-offset) calc(100% - var(--mask-offset)),transparent),linear-gradient(to right,transparent,#fff var(--mask-offset) calc(100% - var(--mask-offset)),transparent)",
      //     "-webkit-mask":
      //       "linear-gradient(to bottom,transparent,#fff var(--mask-offset) calc(100% - var(--mask-offset)),transparent),linear-gradient(to right,transparent,#fff var(--mask-offset) calc(100% - var(--mask-offset)),transparent)",
      //     "mask-composite": "intersect",
      //     "-webkit-mask-composite": "source-in, xor",
      //   } as CSSProperties
      // }
    />
  );
};

const Background3 = () => {
  return (
    <div className="bg-white absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
  );
};

const Background4 = () => {
  return (
    <div className="bg-white absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
    </div>
  );
};

const Background5 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
  );
};

const Background6 = () => {
  return (
    <div className="bg-white absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
  );
};

const Background7 = () => {
  return (
    <div className="bg-white absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]" />
  );
};

const Background8 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
  );
};

const Background9 = () => {
  return (
    <div className="bg-white absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
  );
};

const Background10 = () => {
  return (
    <div className="bg-white absolute top-0 -z-10 h-full w-full">
      <div className="absolute bottom-auto left-auto right-0 top-0 !h-[500px] !w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
    </div>
  );
};

const Background11 = () => {
  return (
    <div className="bg-white absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
  );
};

const Background12 = () => {
  return (
    <div className="bg-white absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]" />
  );
};

const Background13 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#011440] bg-[radial-gradient(#ffffff33_1px,#011440_1px)] bg-[size:20px_20px]" />
  );
};

export const BACKGROUND_OPTIONS = [
  {
    name: "Background 1",
    component: <Background1 />,
    theme: "light",
  },
  {
    name: "Background 3",
    component: <Background3 />,
    theme: "light",
  },
  {
    name: "Background 4",
    component: <Background4 />,
    theme: "light",
  },
  {
    name: "Background 6",
    component: <Background6 />,
    theme: "light",
  },
  {
    name: "Background 7",
    component: <Background7 />,
    theme: "light",
  },
  {
    name: "Background 9",
    component: <Background9 />,
    theme: "light",
  },
  {
    name: "Background 10",
    component: <Background10 />,
    theme: "light",
  },
  {
    name: "Background 11",
    component: <Background11 />,
    theme: "light",
  },
  {
    name: "Background 12",
    component: <Background12 />,
    theme: "light",
  },
  {
    name: "Background 13",
    component: <Background13 />,
    theme: "dark",
  },
  {
    name: "Background 5",
    component: <Background5 />,
    theme: "dark",
  },
  {
    name: "Background 8",
    component: <Background8 />,
    theme: "dark",
  },
] as const;

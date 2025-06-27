// Retro 80s Neon BG
const BgRetroNeon = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-black via-fuchsia-900 to-blue-900">
    <div className="absolute left-0 right-0 bottom-0 h-1/2 w-full bg-gradient-to-t from-fuchsia-500/60 to-transparent blur-2xl" />
    <div className="absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/40 blur-2xl" />
    <div className="absolute right-10 top-10 h-24 w-24 rounded-full bg-fuchsia-400/40 blur-2xl" />
  </div>
);

// Organic Blob BG
const BgOrganicBlob = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-tr from-green-50 via-blue-50 to-purple-100">
    <svg className="absolute left-1/4 top-1/4 opacity-30" width="300" height="300" viewBox="0 0 300 300">
      <path d="M60,150 Q90,60 150,90 Q210,120 180,210 Q120,270 60,150 Z" fill="#a7f3d0" />
    </svg>
    <svg className="absolute right-1/4 bottom-1/4 opacity-20" width="200" height="200" viewBox="0 0 200 200">
      <ellipse cx="100" cy="100" rx="80" ry="50" fill="#818cf8" />
    </svg>
  </div>
);

// Minimal Lines BG
const BgMinimalLines = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-white">
    <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#e5e7eb_0_1px,transparent_1px_40px)] opacity-60" />
    <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,#e5e7eb_0_1px,transparent_1px_40px)] opacity-60" />
  </div>
);

// Geometric Shapes BG
const BgGeometricShapes = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50">
    <svg className="absolute left-10 top-10 opacity-20" width="120" height="120">
      <polygon points="60,10 110,110 10,110" fill="#fbbf24" />
    </svg>
    <svg className="absolute right-10 bottom-10 opacity-20" width="100" height="100">
      <rect width="100" height="100" rx="20" fill="#60a5fa" />
    </svg>
  </div>
);

// Aurora Gradient BG
const BgAurora = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-tr from-indigo-900 via-green-400/30 to-fuchsia-600/40">
    <div className="absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-green-300/30 blur-3xl" />
    <div className="absolute right-1/4 bottom-1/3 h-60 w-60 rounded-full bg-fuchsia-400/30 blur-2xl" />
  </div>
);
// Modern Glassmorphism Light BG
const BgGlassmorphismLight = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-white via-blue-100 to-purple-100">
      <div className="absolute left-1/4 top-1/4 h-80 w-80 rounded-3xl bg-white/40 shadow-2xl backdrop-blur-2xl border border-white/30" />
      <div className="absolute right-1/4 bottom-1/4 h-60 w-60 rounded-full bg-purple-200/40 blur-2xl" />
    </div>
  );
};

// Abstract Shapes Light BG
const BgAbstractShapesLight = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-tr from-pink-50 via-blue-50 to-yellow-50">
      <svg className="absolute left-10 top-10 opacity-30" width="200" height="200">
        <circle cx="100" cy="100" r="80" fill="#a5b4fc" />
      </svg>
      <svg className="absolute right-10 bottom-10 opacity-20" width="180" height="180">
        <rect width="180" height="180" rx="40" fill="#fbcfe8" />
      </svg>
    </div>
  );
};

// Modern Glassmorphism Dark BG
const BgGlassmorphismDark = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-neutral-900 via-indigo-950 to-fuchsia-950">
      <div className="absolute left-1/4 top-1/4 h-80 w-80 rounded-3xl bg-white/10 shadow-2xl backdrop-blur-2xl border border-white/10" />
      <div className="absolute right-1/4 bottom-1/4 h-60 w-60 rounded-full bg-fuchsia-900/40 blur-2xl" />
    </div>
  );
};

// Abstract Shapes Dark BG
const BgAbstractShapesDark = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-tr from-neutral-900 via-indigo-950 to-fuchsia-950">
      <svg className="absolute left-10 top-10 opacity-20" width="200" height="200">
        <circle cx="100" cy="100" r="80" fill="#818cf8" />
      </svg>
      <svg className="absolute right-10 bottom-10 opacity-10" width="180" height="180">
        <rect width="180" height="180" rx="40" fill="#f472b6" />
      </svg>
    </div>
  );
};
const BgLightGrid1 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
  );
};

const BgLightGrid2 = () => {
  return (
    <div className="relative h-full w-full bg-white">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  );
};

const BgLightGrid5 = () => {
  return (
    <div className="relative h-full w-full bg-white">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
    </div>
  );
};

const BgLightGradient1 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]" />
    </div>
  );
};

const BgLightGrid3 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
  );
};

const BgLightGridGradient1 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
    </div>
  );
};

const BgDarkGradient1 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
  );
};

const BgLightGrid4 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
  );
};

const BgLightGradient2 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]" />
  );
};

const BgDarkGradient2 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
  );
};

const BgLightGradient3 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
  );
};

const BgLightGradient4 = () => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-white">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
    </div>
  );
};

const BgLightGradient5 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
  );
};

const BgLightGradient6 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]" />
  );
};

const BgDarkGrid1 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />
  );
};

const BgDarkGradient3 = () => {
  return (
    <div className="relative h-full w-full bg-neutral-900">
      <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
    </div>
  );
};

const BgLightGridGradient2 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]" />
    </div>
  );
};

const BgDarkGradient4 = () => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]" />
    </div>
  );
};

const BgDarkGradient5 = () => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
    </div>
  );
};

const BgDarkGrid2 = () => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
    </div>
  );
};

const BgDarkGridGradient1 = () => {
  return (
    <div className="relative h-full w-full bg-black">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" />
    </div>
  );
};

const BgDarkGrid3 = () => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
};

export const BACKGROUND_OPTIONS = [
  {
    name: 'Retro Neon',
    component: <BgRetroNeon />,
    theme: 'dark',
  },
  {
    name: 'Organic Blob',
    component: <BgOrganicBlob />,
    theme: 'light',
  },
  {
    name: 'Minimal Lines',
    component: <BgMinimalLines />,
    theme: 'light',
  },
  {
    name: 'Geometric Shapes',
    component: <BgGeometricShapes />,
    theme: 'light',
  },
  {
    name: 'Aurora Gradient',
    component: <BgAurora />,
    theme: 'dark',
  },
  {
    name: 'Glassmorphism Light',
    component: <BgGlassmorphismLight />,
    theme: 'light',
  },
  {
    name: 'Abstract Shapes Light',
    component: <BgAbstractShapesLight />,
    theme: 'light',
  },
  {
    name: 'Background Light Gradient 1',
    component: <BgLightGradient1 />,
    theme: 'light',
  },
  {
    name: 'Background Light Gradient 2',
    component: <BgLightGradient2 />,
    theme: 'light',
  },
  {
    name: 'Background Light Gradient 3',
    component: <BgLightGradient3 />,
    theme: 'light',
  },
  {
    name: 'Background Light Gradient 4',
    component: <BgLightGradient4 />,
    theme: 'light',
  },
  {
    name: 'Background Light Gradient 5',
    component: <BgLightGradient5 />,
    theme: 'light',
  },
  {
    name: 'Background Light Gradient 6',
    component: <BgLightGradient6 />,
    theme: 'light',
  },
  {
    name: 'Background Light Grid Gradient 1',
    component: <BgLightGridGradient1 />,
    theme: 'light',
  },
  {
    name: 'Background Light Grid Gradient 2',
    component: <BgLightGridGradient2 />,
    theme: 'light',
  },
  {
    name: 'Background Light Grid ',
    component: <BgLightGrid1 />,
    theme: 'light',
  },
  {
    name: 'Background Light Grid 2',
    component: <BgLightGrid2 />,
    theme: 'light',
  },
  {
    name: 'Background Light Grid 3',
    component: <BgLightGrid3 />,
    theme: 'light',
  },
  {
    name: 'Background Light Grid 4',
    component: <BgLightGrid4 />,
    theme: 'light',
  },
  {
    name: 'Background Light Grid 5',
    component: <BgLightGrid5 />,
    theme: 'light',
  },
  {
    name: 'Background Dark Gradient',
    component: <BgDarkGradient1 />,
    theme: 'dark',
  },
  {
    name: 'Glassmorphism Dark',
    component: <BgGlassmorphismDark />,
    theme: 'dark',
  },
  {
    name: 'Abstract Shapes Dark',
    component: <BgAbstractShapesDark />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Gradient 2',
    component: <BgDarkGradient2 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Gradient 3',
    component: <BgDarkGradient3 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Gradient 4',
    component: <BgDarkGradient4 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Gradient 5',
    component: <BgDarkGradient5 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid Gradient 1',
    component: <BgDarkGridGradient1 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 1',
    component: <BgDarkGrid1 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 2',
    component: <BgDarkGrid2 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgDarkGrid3 />,
    theme: 'dark',
  },
] as const;

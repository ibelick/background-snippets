import React, { useEffect, useRef, useState } from 'react';
const BgLightGrid1 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
  );
};

const BgLightGrid2 = () => {
  return (
    <div className="relative h-full w-full bg-red">
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
const BgDarkGrid4 = () => {
  return (
    <div className="relative h-full w-full bg-sky-200">
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  </div>
  
  );
};
const BgDarkGrid5 = () => {
  return (
    <div className="relative h-full w-full bg-red-300">
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  </div>
  
  
  );
};

const BgDarkGrid7 = () => {
  return (
<div className="absolute inset-0 -z-10 h-full w-full bg-[#1e293b] bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[#0f172a] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
  <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#475569] opacity-50" />
</div>

  );
};
const BgLightGridD1 = () => {
  return (
<div className="absolute inset-0 -z-10 h-full w-full bg-[#1e1e1e] bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:14px_24px]" />
  );
};
const BgLightGridD2 = () => {
  return (
    <div className="relative h-full w-full bg-[rgb(255,200,200)]">
    <div className="absolute h-full w-full bg-[radial-gradient(rgb(229,231,235)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,rgb(0,0,0)_70%,transparent_100%)]" />
  </div>
  );
};
const BgColorGrids = () => {
 return (
<div className="absolute inset-0 -z-10 h-full w-full bg-blue-100 bg-pattern">
  <div className="absolute bottom-0 left-0 right-0 top-0 bg-radial bg-blue-100"></div>
</div>
  );
};
const BgColorGridsA1 = () => {
 return (
<div className="relative h-full w-full">
  <div className="absolute top-0 left-0 z-[-2] h-full w-full bg-gradient-to-r from-pink-200 to-white"></div>
  <div className="absolute top-0 right-0 z-[-2] h-full w-full bg-gradient-to-l from-pink-200 to-white"></div>
  <div className="absolute bottom-0 left-0 z-[-2] h-full w-full bg-gradient-to-t from-pink-200 to-white"></div>
  <div className="absolute bottom-0 right-0 z-[-2] h-full w-full bg-gradient-to-b from-pink-200 to-white"></div>
</div>


  );
};
const BgColorGridsA2 = () => {
 return (
<div className="relative h-full w-full">
  <div className="absolute top-0 left-0 z-[-2] h-full w-full bg-gradient-to-r from-red-200 to-yellow-200"></div>
  <div className="absolute top-0 right-0 z-[-2] h-full w-full bg-gradient-to-l from-blue-200 to-white"></div>
  <div className="absolute bottom-0 left-0 z-[-2] h-full w-full bg-gradient-to-t from-yellow-200 to-black"></div>
  <div className="absolute bottom-0 right-0 z-[-2] h-full w-full bg-gradient-to-b from-blue-200 to-white"></div>
</div>

  );
};
const BgColorGridsA3 = () => {
 return (
<div className="absolute top-0 -z-10 h-full w-full bg-white">
  <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(109,244,173,0.5)] opacity-50 blur-[80px]"></div>
</div>
  );
};
const BgColorGridsA4 = () => {
 return (
<div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:6rem_4rem]">
  <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#ffffff,transparent)]"></div>
</div>

  );
};
const BgColorGridsA5 = () => {
 return (
<div className="absolute top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(100%_50%_at_50%_0%,rgba(255,255,255,0.8)_0%,rgba(255,342,203,0.5)_50%,rgba(0,0,0,0)_100%)]"></div>
  );
};
const BgColorGridsA6 = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-black animate-focus-move"
        style={{
          background: 'radial-gradient(25% 125% at 50% 10%, #ffffff 40%, #6a0dad 100%)',
          backgroundSize: '200% 200%',
          animation: 'focusMove 10s ease-in-out infinite',
        }}
      ></div>
      <style>{`
        @keyframes focusMove {
          0% {
            background-position: 0% 0%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
      `}</style>
    </div>
  );
};
const BgColorGridsA7 = () => {
 return (
<div className="absolute inset-0 -z-10 h-full w-full bg-black [background:radial-gradient(25%_125%_at_50%_10%,#ffffff_0%,#ffffff_40%,#000000_100%)]"></div>
  );
};
const BgColorGridsA8 = () => {
  return (
<div className="absolute inset-0 -z-10 h-full w-full bg-black [background:radial-gradient(25%_25%_at_10%_10%,#ffffff_40%,#add8e6_100%)]"></div>
   );
 };
const BgColorGridsA9 = () => {
  return (
<div className="relative h-full w-full bg-black overflow-hidden">
  {/* Background Gradient */}
  <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(25%_25%_at_10%_10%,#ffffff_0%,#ffffff_40%,#1a1a1a_100%)]"></div>

  {/* Particles */}
  {[...Array(50)].map((_, i) => (
    <div
      key={i}
      className="absolute bg-white rounded-full"
      style={{
        width: `${Math.random() * 5 + 2}px`,
        height: `${Math.random() * 5 + 2}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animation: `particleMove ${Math.random() * 5 + 2}s infinite linear`,
        opacity: Math.random(),
      }}
    ></div>
  ))}

  <style jsx>{`
    @keyframes particleMove {
      0% {
        transform: translateY(0) translateX(0);
      }
      100% {
        transform: translateY(-100vh) translateX(0);
      }
    }
  `}</style>
</div>
   );
 };


 const BgColorGridsA10: React.FC = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient"></div>
    <style>
      {`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        .animate-gradient {
          background: linear-gradient(45deg, #ff6f61, #d0e1f9, #6b5b95);
          background-size: 300% 300%;
          animation: gradientAnimation 10s ease infinite;
        }
      `}
    </style>
  </div>
  );
}; 
export default BgColorGrids;
const CrazyAnimatedBackground: React.FC = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 z-[-2] bg-black animate-crazy-background"></div>
      <style>
        {`
          @keyframes crazyBackground {
            0% {
              background: radial-gradient(#ffffff33 1px, #00091d 1px);
              background-size: 20px 20px;
              transform: scale(1) rotate(0deg);
            }
            25% {
              background: radial-gradient(#ff0000 1px, #000000 1px);
              background-size: 50px 50px;
              transform: scale(1.2) rotate(45deg);
            }
            50% {
              background: radial-gradient(#00ff00 1px, #000000 1px);
              background-size: 100px 100px;
              transform: scale(1) rotate(90deg);
            }
            75% {
              background: radial-gradient(#0000ff 1px, #000000 1px);
              background-size: 150px 150px;
              transform: scale(1.2) rotate(135deg);
            }
            100% {
              background: radial-gradient(#ffffff33 1px, #00091d 1px);
              background-size: 20px 20px;
              transform: scale(1) rotate(180deg);
            }
          }

          .animate-crazy-background {
            animation: crazyBackground 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};
const WaterBloomBackground: React.FC = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <div className="water-blooms">
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              key={index}
              className="water-bloom"
              style={{
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`,
                width: `${Math.random() * 40 + 20}px`,
                height: `${Math.random() * 40 + 20}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <style>
        {`
          .water-blooms {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .water-bloom {
            position: absolute;
            background-color: rgba(0, 150, 255, 0.6);
            border-radius: 50%;
            opacity: 0.6;
            animation: floatUp 10s ease-in-out infinite;
          }

          @keyframes floatUp {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0.6;
            }
            50% {
              transform: translateY(-100vh) scale(1.5);
              opacity: 0.4;
            }
            100% {
              transform: translateY(0) scale(1);
              opacity: 0.6;
            }
          }
        `}
      </style>
    </div>
  );
};
const CartoonCloudsBackground: React.FC = () => {
  return (
    <div className="relative h-full w-screen overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <div className="background">
          <div className="clouds">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="cloud"
                style={{
                  left: `${Math.random() * 100}vw`,
                  top: `${Math.random() * 100}vh`,
                  width: `${Math.random() * 150 + 100}px`,
                  height: `${Math.random() * 60 + 60}px`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${20 + Math.random() * 10}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          .background {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #829eeb; /* Light sky blue */
          }

          .clouds {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .cloud {
            position: absolute;
            background: #334dash;
            border-radius: 100%;
            box-shadow: 0 0 14px rgba(0, 0, 0, 0.2);
            opacity: 0.9;
            animation: floatClouds linear infinite;
          }

          @keyframes floatClouds {
            0% {
              transform: translateX(-160vw);
            }
            100% {
              transform: translateX(130vw);
            }
          }
        `}
      </style>
    </div>
  );
};
const Darkbg1 = () => {
  return (
<div className="absolute inset-0 -z-10 h-full 1e1e] bg-[linear-gradient(to_right,#2d2d6d_1px,transparent_1px),linear-gradient(to_bottom,#2d2d2d_1px,transparent_1px)] bg-[size:190px_196px]" />

  );
};
const Darkbg2 = () => {
  return (
<div className="absolute inset-0 -z-10 h-full w-full bg-[#1e1e1e] bg-[linear-gradient(to_right,#2d2d2d_1px,transparent_1px),linear-gradient(to_bottom,#2d2d2d_1px,transparent_1px)] bg-[size:6rem_4rem]">
  <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_100px,#C9EBFF,transparent)]"></div>
</div>

  );
};
const Lightbg1 = () => {
  return (
<div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#e0f7fa_40%,#dcf235_100%)]"></div>


  );
};
const Lightbg2 = () => {
  return (
<div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#ffebee_40%,#ff9800_100%)]"></div>
  );
};
const Lightbg3 = () => {
  return (
<div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#ffffff_40%,#000000_100%)]"></div>
  );
};
const Lightbg4 = () => {
  return (
<div className="relative h-full w-full bg-slate-50">
  <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,87,34,.15),rgba(255,255,255,0))]"></div>
  <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,87,34,.15),rgba(255,255,255,0))]"></div>
</div>

  );
};
const Lightbg5 = () => {
  return (

<div className="absolute inset-0 -z-10 h-full bg-[linear-gradient(to_right,#2d2d2d_20px,transparent_20px),linear-gradient(to_bottom,#2d2d2d_20px,transparent_20px),linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:0px_10px,100px_100px,50px_50px,50px_50px] bg-[position:0_0,0_0,0_0,0_0]"></div>

  );
};
const Lightbg6 = () => {
  return (
<div className="relative h-full w-full overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-yellow-400 to-green-300 animate-gradient"></div>
  <style>
    {`     @keyframes gradientAnimation {
      0% {
        background-position: 0% 0%;
      }
      50% {
        background-position: 100% 100%;
      }
      100% {
        background-position: 0% 0%;
      }
    }

    .animate-gradient {
      background: linear-gradient(45deg, rgba(22, 255, 102, 0.6), rgba(255, 255, 255, 0.3), rgba(222, 255, 102, 0.6));
      background-size: 300% 300%;
      animation: gradientAnimation 10s ease infinite;
    }`}

  </style>
</div>


  );
};
const Lightbg7 = () => {
  return (

<div className="relative h-full w-full">

  <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
  

  <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#FF7757,transparent)]"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_20%_80px,#FF63B9,transparent)]"></div>
</div>

  );
};
const Lightbg8 = () => {
  return (

<div className="relative h-full w-full">
 
  <div className="absolute inset-0 -z-10 bg-white bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
  
  
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#8FFFB0,transparent)]"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#EAFF45,transparent)]"></div>
</div>


  );
};
const Lightbg9 = () => {
  return (
<div className="relative h-full w-full overflow-hidden">

  <div className="absolute inset-0 -z-10 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
  

  <div className ="absolute inset-0 bg-[radial-gradient(circle_at_center,#FF7112,transparent)]"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFF991,transparent)]"></div>


  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFF991,transparent)] opacity-60 mix-blend-multiply"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FF7112,transparent)] opacity-30 mix-blend-multiply"></div>
  </div>
</div>


  );
};
const Lightbg10 = () => {
  return (
<div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,#FF4D00_0,#FF4D00_50%,transparent_100%)]"></div>



  );
};

export const BACKGROUND_OPTIONS = [
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
  {
    name: 'Background Dark Grid 3',
    component: <BgDarkGrid4 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgDarkGrid5 />,
    theme: 'dark',
  },
  // {
  //   name: 'Background Dark Grid 3',
  //   component: <BgDarkSpider />,
  //   theme: 'dark',
  // },
  {
    name: 'Background Dark Grid 3',
    component: <BgDarkGrid7 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgLightGridD1  />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgLightGridD2  />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGrids  />,
    theme: 'light',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA1  />,
    theme: 'light',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA2  />,
    theme: 'light',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA3  />,
    theme: 'light',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA4  />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA5  />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA6  />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA7  />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA8  />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA9  />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA10  />,
    theme: 'light',
  },
  {
    name: 'Background Dark Grid 3',
    component: <CrazyAnimatedBackground  />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <WaterBloomBackground />,
    theme: 'ligth',
  },
  {
    name: 'Background Dark Grid 3',
    component: <CartoonCloudsBackground />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <Darkbg1 />,
    theme: 'ligth',
  },
  {
    name: 'Background Dark Grid 3',
    component: <Darkbg2 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <Lightbg1 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <Lightbg2 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <Lightbg3 />,
    theme: 'ligth',
  },
  {
    name: 'Background Dark Grid 3',
    component: <Lightbg4 />,
    theme: 'ligth',
  },
  {
    name: 'Background Dark Grid 3',
    component: <Lightbg5 />,
    theme: 'ligth',
  },
  {
    name: 'Background Dark Grid 3',
    component: <Lightbg6 />,
    theme: 'ligth',
  },
  {
    name: 'Background Dark Grid 3',
    component: <Lightbg7 />,
    theme: 'light',
  },
  {
    name: 'Background Dark Grid 3',
    component: <Lightbg8 />,
    theme: 'light',
  },
  {
    name: 'Background Dark Grid 3',
    component: <Lightbg9/>,
    theme: 'ligth',
  },
  {
    name: 'Background Dark Grid 3',
    component: <Lightbg10 />,
    theme: 'dark',
  },

] as const;
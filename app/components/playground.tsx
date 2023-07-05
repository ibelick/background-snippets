type PlaygroundProps = {
  children: React.ReactNode;
  setPreview: (preview: React.ReactNode) => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
};

const Playground: React.FC<PlaygroundProps> = ({
  children,
  setPreview,
  theme,
  setTheme,
}) => {
  return (
    <div className="relative min-h-[300px] w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10">
      <div className="absolute cursor-pointer top-4 left-4 z-10">
        <div className="flex flex-row gap-4">
          <div
            className=" bg-slate-900 text-white text-xs font-medium px-2 py-1 rounded-md"
            onClick={() => {
              setPreview(children);
              setTheme(theme);
            }}
          >
            preview
          </div>
          <div className="bg-slate-900 text-white text-xs font-medium px-2 py-1 rounded-md">
            copy code
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Playground;

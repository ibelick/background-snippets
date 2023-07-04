type PlaygroundProps = {
  children: React.ReactNode;
  setPreview: (preview: React.ReactNode) => void;
};

const Playground: React.FC<PlaygroundProps> = ({ children, setPreview }) => {
  return (
    <div className="relative min-h-[400px] w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10">
      <div
        className="absolute cursor-pointer top-4 left-4 z-10 bg-slate-900 text-white text-xs font-medium px-2 py-1 rounded-md"
        onClick={() => setPreview(children)}
      >
        preview
      </div>
      {children}
    </div>
  );
};

export default Playground;

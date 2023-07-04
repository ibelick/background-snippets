type PlaygroundProps = {
  children: React.ReactNode;
  name: string;
};

const Playground: React.FC<PlaygroundProps> = ({ children, name }) => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="mb-3 font-medium">{name}</h2>
        <div>
          <div>code</div>
        </div>
      </div>
      <div className="relative min-h-[400px] w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10">
        {children}
      </div>
    </div>
  );
};

export default Playground;

import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { CheckIcon, ClipboardIcon } from 'lucide-react';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { toast } from 'sonner';

type PlaygroundProps = {
  children: React.ReactElement;
  setPreview: (preview: React.ReactNode) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
};

enum Technology {
  HTML = 'html',
  REACT = 'react',
  VUE = 'vue',
}

const Playground: React.FC<PlaygroundProps> = ({
  children,
  setPreview,
  theme,
  setTheme,
}) => {
  const [hasCopied, setHasCopied] = React.useState(false);

  const itemClasses = cn(
    'text-xs font-light text-white flex items-center py-1 px-2 pr-9 rounded-sm w-full text-left cursor-pointer outline-none hover:bg-slate-700 focus:bg-slate-700'
  );

  const copyCode = (type: Technology) => {
    let code = ReactDOMServer.renderToString(children);

    switch (type) {
      case Technology.REACT:
        code = code.replace(/class=/g, 'className=');
        break;
    }

    navigator.clipboard.writeText(code);
    toast.success('Copied to clipboard');
    setHasCopied(true);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <>
      <div className="relative min-h-[300px] w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10">
        <div className="absolute left-4 top-4 z-10 cursor-pointer">
          <div className="flex flex-row gap-3">
            <div
              className=" rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white"
              onClick={() => {
                setPreview(children);
                setTheme(theme);
              }}
            >
              preview
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white flex items-center gap-1">
                  copy code
                  {hasCopied ? (
                    <CheckIcon className="h-3 w-3" />
                  ) : (
                    <ClipboardIcon className="h-3 w-3" />
                  )}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-slate-900 rounded-md p-1 text-white text-xs font-medium mt-1"
              >
                <DropdownMenuItem
                  className={itemClasses}
                  onClick={() => {
                    copyCode(Technology.HTML);
                  }}
                >
                  html
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={itemClasses}
                  onClick={() => {
                    copyCode(Technology.REACT);
                  }}
                >
                  react
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={itemClasses}
                  onClick={() => {
                    copyCode(Technology.VUE);
                  }}
                >
                  vue
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Playground;

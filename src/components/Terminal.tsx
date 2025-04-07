import React from "react";

interface TerminalProps {
  title: string;
  children?: React.ReactNode;
}

const Terminal = ({ title, children }: TerminalProps) => {
  return (
    <>
      <div className={`bg-[#151515] border-2 border-primary-border h-full`}>
        <div className="h-9 bg-primary-border-dark flex items-center justify-between px-2 font-tech-mono font-bold text-[#efefef] text-[12px]">
          <div className="flex-1">{title}</div>
        </div>

        <div className="text-[#ffffffc2] p-2 font-tech-mono overflow-y-auto h-[calc(100%-36px)] scrollbar scrollbar-thumb-[#727272] scrollbar-track-[#181818]">
          {children ? (
            children
          ) : (
            <>
              {"> npm run dev"}
              <span className="animate-blink">_</span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Terminal;

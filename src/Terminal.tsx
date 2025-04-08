import React from "react";

interface TerminalProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

import CloseIcon from "@mui/icons-material/Close";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { twMerge } from "tailwind-merge";

const Terminal = ({ title, children, className }: TerminalProps) => {
  return (
    <div
      className={twMerge(
        `bg-[#151515] border-2 border-primary-border h-full`,
        className
      )}
    >
      <div
        id="terminal-header"
        className="h-9 bg-primary-border-dark flex items-center justify-between px-2 font-tech-mono font-bold text-[#efefef] text-[12px]"
      >
        <div id="terminal-title" className="flex-1">
          {title}
        </div>

        <div id="terminal-action-btns-container" className="flex gap-2">
          <button id="terminal-minimize-btn" className="hover:cursor-pointer">
            <HorizontalRuleIcon sx={{ fontSize: 15 }} />
          </button>

          <button id="terminal-restore-btn">
            <CropSquareIcon
              sx={{ fontSize: 15 }}
              className="hover:cursor-pointer"
            />
          </button>

          <button id="terminal-close-btn" className="hover:cursor-pointer">
            <CloseIcon sx={{ fontSize: 15 }} />
          </button>
        </div>
      </div>

      <div
        id="terminal-body"
        className="text-[#ffffffc2] p-2 font-tech-mono overflow-y-auto h-[calc(100%-36px)] scrollbar scrollbar-thumb-[#727272] scrollbar-track-[#181818]"
      >
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
  );
};

export default Terminal;

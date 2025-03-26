import { ReactNode, useState } from "react";

interface GrammarCardProps {
  title: string;
  children: ReactNode;
}

export function GrammarCard({ title, children }: GrammarCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card overflow-hidden mb-10 hover:shadow-md transition-all">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-gradient-to-r from-accent-2 to-accent-2/70 p-5 border-b border-neutral-100 flex justify-between items-center cursor-pointer hover:from-accent-2/90 hover:to-accent-2/60 transition-all"
      >
        <h3 className="text-xl font-bold text-[#333] tracking-tight">{title}</h3>
        <i className={`fa-solid fa-chevron-down text-[#333] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}></i>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
      >
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

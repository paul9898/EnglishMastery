import { ReactNode } from "react";

interface ComingSoonProps {
  icon: string;
  title: string;
  description: string;
}

export function ComingSoon({ icon, title, description }: ComingSoonProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <div className="text-center p-8 border-2 border-dashed border-neutral-300 rounded-lg">
        <i className={`${icon} text-5xl text-neutral-400 mb-4`}></i>
        <h3 className="text-xl font-medium text-neutral-600 mb-2">{title}</h3>
        <p className="text-neutral-500">
          {description}
        </p>
      </div>
    </div>
  );
}

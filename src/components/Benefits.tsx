import React from "react";

interface Props {
  benefits: string[];
}

export default function Benefits({ benefits }: Props) {
  return (
    <div className="px-4 py-4 border-t border-border">
      <ul className="space-y-3">
        {benefits.map((benefit, idx) => {
          const parts = benefit.split(" ");
          const emoji = parts[0];
          const text = parts.slice(1).join(" ");

          return (
            <li key={idx} className="flex items-start gap-3">
              <div className="mt-0.5 text-xl leading-none flex-shrink-0">
                {emoji}
              </div>
              <p className="text-base leading-relaxed text-gray-800">{text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

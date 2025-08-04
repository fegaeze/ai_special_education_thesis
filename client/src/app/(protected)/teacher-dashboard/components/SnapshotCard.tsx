import React from "react";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export function SnapshotCard({
  title,
  value,
  tooltip,
}: {
  title: string;
  value: string | number;
  tooltip: string;
}) {
  return (
    <div className="rounded-lg bg-white shadow-sm border border-gray-100 px-4 py-3 min-h-[64px]">
      <div className="flex items-center gap-1 text-xs text-gray-500 uppercase tracking-wide mb-1">
        <p>{title}</p>
        {tooltip && (
          <Tooltip>
            <TooltipTrigger asChild>
              <span tabIndex={0} className="cursor-help">
                <Info size={10} />
              </span>
            </TooltipTrigger>
            <TooltipContent
              sideOffset={8}
              side="right"
              className="max-w-[180px]"
            >
              {tooltip}
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      <p className="text-xl font-semibold text-gray-800">{value}</p>
    </div>
  );
}

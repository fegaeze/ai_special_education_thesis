import { useState } from "react";
import type { TokenUsage } from "@/lib/types";

interface TokenUsagePillProps {
  tokenUsage: TokenUsage | null;
}

export function TokenUsagePill({ tokenUsage }: TokenUsagePillProps) {
  const [show, setShow] = useState(false);

  if (!tokenUsage) {
    return (
      <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-800">
        Tokens: -
      </span>
    );
  }

  return (
    <span
      className="px-2 py-0.5 rounded bg-gray-200 text-gray-800 relative cursor-pointer"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      Tokens: {tokenUsage.prompt} | {tokenUsage.completion} | {tokenUsage.total}
      {show && (
        <span className="absolute z-20 left-0 top-full mt-1 w-56 bg-white border border-gray-200 rounded shadow-lg p-2 text-xs text-gray-800">
          <b>Token Usage</b>
          <br />
          Prompt: {tokenUsage.prompt}
          <br />
          Completion: {tokenUsage.completion}
          <br />
          Total: {tokenUsage.total}
        </span>
      )}
    </span>
  );
}

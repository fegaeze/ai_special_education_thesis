import { useState } from "react";

interface AccuracyTooltipProps {
  correct: number;
  wrong: number;
  unknown: number;
}

export function AccuracyTooltip({
  correct,
  wrong,
  unknown,
}: AccuracyTooltipProps) {
  const [show, setShow] = useState(false);

  return (
    <span
      className="relative cursor-help underline decoration-dotted underline-offset-2 text-muted-foreground"
      tabIndex={0}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      Model Accuracy
      {show && (
        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 w-56 bg-white border border-gray-200 rounded shadow-lg p-3 text-xs text-gray-800">
          <div className="font-semibold mb-1">Model Accuracy</div>
          <div>Correct predictions / total.</div>
          <div className="mt-2">
            <b>Correct:</b> {correct}
            <br />
            <b>Wrong:</b> {wrong}
            <br />
            <b>Unknown:</b> {unknown}
          </div>
        </span>
      )}
    </span>
  );
}

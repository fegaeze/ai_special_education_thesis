import React from "react";

interface CongratulatoryPageProps {
  onExitHome: () => void;
}

export const CongratulatoryPage: React.FC<CongratulatoryPageProps> = ({
  onExitHome,
}) => {
  return (
    <div className="h-120 w-full p-8 border-0 text-center flex flex-col items-center justify-center">
      <div className="mb-6">
        {/* Bouncing star — smooth vertical bounce, no side-to-side */}
        <div className="flex justify-center mb-4">
          <span className="text-7xl select-none animate-bounce">⭐</span>
        </div>
        <h3 className="text-3xl font-semibold text-purple-700">
          Quiz Complete! 🎉
        </h3>
        <p className="text-md text-purple-900 mb-6">
          You&apos;ve completed all the questions! Great job!
        </p>
      </div>
      <button
        onClick={onExitHome}
        className="text-sm px-8 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600"
      >
        Finish Adventure
      </button>
    </div>
  );
};

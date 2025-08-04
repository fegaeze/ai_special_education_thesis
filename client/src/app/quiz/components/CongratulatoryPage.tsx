import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface CongratulatoryPageProps {
  onExitHome: () => void;
}

export const CongratulatoryPage: React.FC<CongratulatoryPageProps> = ({
  onExitHome,
}) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/CuteDancingStar.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(() => setAnimationData(null));
  }, []);

  return (
    <div className="h-120 w-full p-8 border-0 text-center flex flex-col items-center justify-center">
      <div className="mb-6">
        {/* Dancing Star Animation */}
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24">
            {animationData && (
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
              />
            )}
          </div>
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
        className=" text-sm px-8 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600"
      >
        Finish Adventure
      </button>
    </div>
  );
};

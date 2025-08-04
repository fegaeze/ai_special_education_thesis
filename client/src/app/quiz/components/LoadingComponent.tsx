import { Loader2 } from "lucide-react";

export const LoadingComponent = () => {
  return (
    <div className="text-center">
      <div className="animate-bounce mb-4">
        <Loader2 className="h-12 w-12 text-white animate-spin mx-auto" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">
        Loading your quiz...
      </h2>
      <p className="text-white/80">Getting everything ready for you! 🎉</p>
    </div>
  );
};

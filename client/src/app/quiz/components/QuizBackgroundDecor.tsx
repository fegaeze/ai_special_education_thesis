import { Star } from "lucide-react";

export default function QuizBackgroundDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large bright yellow and white stars */}
      <div className="absolute top-10 left-10">
        <Star className="h-8 w-8 text-yellow-300 opacity-100 drop-shadow-lg" />
      </div>
      <div className="absolute top-20 right-20">
        <Star className="h-6 w-6 text-white opacity-100 drop-shadow-lg" />
      </div>
      <div className="absolute bottom-20 left-20">
        <Star className="h-10 w-10 text-yellow-400 opacity-100 drop-shadow-lg" />
      </div>
      <div className="absolute bottom-10 right-10">
        <Star className="h-7 w-7 text-white opacity-100 drop-shadow-lg" />
      </div>
      {/* Small bright stars */}
      <div className="absolute top-1/4 left-1/3">
        <Star className="h-3 w-3 text-white opacity-100" />
      </div>
      <div className="absolute top-1/2 left-1/4">
        <Star className="h-4 w-4 text-yellow-200 opacity-100" />
      </div>
      <div className="absolute top-1/3 right-1/4">
        <Star className="h-2 w-2 text-white opacity-100" />
      </div>
      <div className="absolute bottom-1/3 right-1/3">
        <Star className="h-3 w-3 text-yellow-300 opacity-100" />
      </div>
      <div className="absolute bottom-1/4 left-1/2">
        <Star className="h-2 w-2 text-white opacity-100" />
      </div>
      <div className="absolute top-1/5 right-1/2">
        <Star className="h-3 w-3 text-yellow-100 opacity-100" />
      </div>
      <div className="absolute bottom-1/5 left-1/5">
        <Star className="h-2 w-2 text-white opacity-100" />
      </div>
      <div className="absolute top-1/6 left-1/6">
        <Star className="h-4 w-4 text-yellow-200 opacity-100" />
      </div>
      <div className="absolute bottom-1/6 right-1/6">
        <Star className="h-3 w-3 text-white opacity-100" />
      </div>
    </div>
  );
}

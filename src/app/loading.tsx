import { Dumbbell } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center px-4">
      <div className="relative flex items-center justify-center">
        {/* Glowing Background Pulse */}
        <div className="absolute -inset-4 rounded-full bg-[#a3e635]/20 blur-2xl animate-pulse" />

        {/* Animated Outer Spinner Ring */}
        <div className="h-24 w-24 rounded-full border-4 border-gray-800 border-t-[#a3e635] animate-spin" />

        {/* Center Pulsing Icon */}
        <div className="absolute flex h-14 w-14 items-center justify-center rounded-2xl bg-[#12141a] border border-gray-800 shadow-xl">
          <Dumbbell className="h-7 w-7 text-[#a3e635] animate-bounce" />
        </div>
      </div>

      {/* Loading Text */}
      <div className="mt-8 text-center space-y-2">
        <h3 className="text-lg font-black uppercase tracking-wider text-white">
          Loading Workouts
        </h3>
        <p className="text-xs text-gray-400 max-w-xs animate-pulse">
          Setting up your workout plan and stats...
        </p>
      </div>

      {/* Bottom Skeleton Bar */}
      <div className="mt-6 flex gap-1.5">
        <div className="h-1.5 w-1.5 rounded-full bg-[#a3e635] animate-ping" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#a3e635] animate-ping [animation-delay:0.2s]" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#a3e635] animate-ping [animation-delay:0.4s]" />
      </div>
    </div>
  );
}

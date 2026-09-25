import { ArrowLeft, Dumbbell, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      {/* Background Accent Glow */}
      <div className="relative flex items-center justify-center">
        <div className="absolute -inset-4 rounded-full bg-[#a3e635]/10 blur-3xl" />

        {/* Floating Fitness Icon */}
        <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-[#12141a] border border-gray-800 shadow-2xl">
          <Dumbbell className="h-12 w-12 text-[#a3e635] -rotate-45" />
        </div>
      </div>

      {/* 404 Header */}
      <h1 className="mt-8 text-7xl font-black tracking-tight text-white md:text-9xl">
        4<span className="text-[#a3e635]">0</span>4
      </h1>

      {/* Title & Message */}
      <h2 className="mt-4 text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
        Rep Skipped! Page Not Found
      </h2>
      <p className="mt-2 max-w-md text-sm text-gray-400">
        Looks like you reached for a weight that isn&apos;t on the rack. The
        page you are looking for has been moved or doesn&apos;t exist.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/workouts"
          className="flex items-center gap-2 rounded-xl bg-[#a3e635] px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-black transition-all hover:bg-[#86efac] active:scale-95"
        >
          <Home className="h-4 w-4" />
          Browse Workouts
        </Link>

        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl border border-gray-800 bg-[#12141a] px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white transition-all hover:bg-gray-800 active:scale-95"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

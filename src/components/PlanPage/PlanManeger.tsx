"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { Ifitlog } from "@/type/type";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { toast } from "react-toastify";
import PlanCard from "./PlanCard";
import SavedCard from "./SavedCard";

interface PlanManagerProps {
  isLoading?: boolean;
}

export default function PlanManager({ isLoading = false }: PlanManagerProps) {
  const [sortBy, setSortBy] = useState<string>("duration");

  const { plan, setPlan, saved, setSaved, activeTab, setActiveTab } =
    useContext(WorkoutContext) as {
      plan: Ifitlog[];
      saved: Ifitlog[];
      setPlan: Dispatch<SetStateAction<Ifitlog[]>>;
      setSaved: Dispatch<SetStateAction<Ifitlog[]>>;
      activeTab: "plan" | "saved";
      setActiveTab: (tab: "plan" | "saved") => void;
    };

  // Handle Remove Workout
  const handleRemove = (id: number, name?: string) => {
    if (activeTab === "plan") {
      setPlan((prev) => prev.filter((item) => item.id !== id));
      toast.info(`${name ?? "Workout"} deleted from today my plan`);
    } else {
      setSaved((prev) => prev.filter((item) => item.id !== id));
      toast.info(`${name ?? "Workout"} deleted from `);
    }
  };

  const currentList = activeTab === "plan" ? plan : saved;

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") return b.duration - a.duration;
    if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 text-white mt-10">
      {/* Top Controls Bar: Tabs & Sort Dropdown */}
      <div className="flex items-center justify-between">
        {/* Tab Switcher */}
        <div className="inline-flex items-center rounded-xl bg-[#12141a] p-1 border border-gray-800">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-lg px-5 py-2 text-xs font-bold transition-all ${
              activeTab === "plan"
                ? "bg-[#1e222d] text-white shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-lg px-5 py-2 text-xs font-bold transition-all ${
              activeTab === "saved"
                ? "bg-[#1e222d] text-white shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 font-medium">Sort By</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none rounded-xl bg-[#12141a] border border-gray-800 px-4 py-2 pr-8 text-xs font-bold text-white focus:outline-none focus:border-gray-600 cursor-pointer"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      {isLoading ? (
        /* Loading State */
        <div className="flex flex-col items-center justify-center rounded-2xl bg-[#12141a]/50 border border-dashed border-gray-800 py-24 text-gray-400">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#a3e635] border-t-transparent" />
          <p className="mt-3 text-sm font-medium">Loading workouts…</p>
        </div>
      ) : plan.length === 0 ? (
        /* Empty State */
        <div className="flex flex-col items-center justify-center rounded-2xl bg-[#12141a]/50 border border-dashed border-gray-800/80 py-28 px-4 text-center">
          <h2 className="text-xl font-black uppercase tracking-wider text-white">
            NOTHING HERE YET
          </h2>
          <p className="mt-2 text-xs text-gray-400 max-w-sm">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/workouts"
            className="mt-6 inline-block rounded-xl bg-[#a3e635] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-black transition-transform hover:bg-[#86efac] active:scale-95"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        /* Workouts List View */
        <div className="space-y-4 mb-10">
          {sortedList.map((item: Ifitlog) =>
            activeTab === "plan" ? (
              <PlanCard key={item.id} item={item} handleRemove={handleRemove} />
            ) : (
              <SavedCard
                key={item.id}
                item={item}
                handleRemove={handleRemove}
              />
            ),
          )}
        </div>
      )}
    </div>
  );
}

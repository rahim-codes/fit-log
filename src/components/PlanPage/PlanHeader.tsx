"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { Ifitlog } from "@/type/type";
import { useContext } from "react";

interface PlanSummaryProps {
  exercisesCount?: number;
  totalMinutes?: number;
  totalCalories?: number;
}

export default function PlanHeader({
  exercisesCount = 0,
  totalMinutes = 0,
  totalCalories = 0,
}: PlanSummaryProps) {
  const {
    plan = [],
    saved = [],
    activeTab,
  } = useContext(WorkoutContext) as {
    plan: Ifitlog[];
    saved: Ifitlog[];
    activeTab: "plan" | "saved";
  };

  const currentList = activeTab === "plan" ? plan : saved;

  const totalExercises = currentList.length + exercisesCount;

  const calculatedMinutes =
    currentList.reduce((acc, item) => acc + (item.duration || 0), 0) +
    totalMinutes;

  const calculatedCalories =
    currentList.reduce((acc, item) => acc + (item.caloriesBurned || 0), 0) +
    totalCalories;

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 text-white mt-10">
      {/* Title & Subtitle Section */}
      <div>
        <h1 className="text-3xl font-black uppercase tracking-tight text-white">
          MY PLAN
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Metrics Card Container */}
      <div className="rounded-2xl bg-[#12141a] border border-gray-800/60 p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800/80 gap-6 md:gap-0">
          {/* Exercises Metric */}
          <div className="flex flex-col justify-center md:px-6 first:pl-0">
            <span className="text-xs font-medium text-gray-400">Exercises</span>
            <span className="text-4xl md:text-5xl font-black text-[#a3e635] mt-2">
              {totalExercises}
            </span>
          </div>

          {/* Minutes Metric */}
          <div className="flex flex-col justify-center md:px-8 pt-4 md:pt-0">
            <span className="text-xs font-medium text-gray-400">Minutes</span>
            <span className="text-4xl md:text-5xl font-black text-white mt-2">
              {calculatedMinutes}
            </span>
          </div>

          {/* Calories Metric */}
          <div className="flex flex-col justify-center md:px-8 pt-4 md:pt-0">
            <span className="text-xs font-medium text-gray-400">Calories</span>
            <span className="text-4xl md:text-5xl font-black text-white mt-2">
              {calculatedCalories}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

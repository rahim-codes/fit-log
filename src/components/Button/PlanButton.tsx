"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { Ifitlog } from "@/type/type";
import { PlusCircle } from "lucide-react";
import { useContext, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

const PlanButton = ({ workout }: { workout: Ifitlog }) => {
  const { plan, setPlan } = useContext(WorkoutContext) as {
    plan: Ifitlog[];
    setPlan: Dispatch<SetStateAction<Ifitlog[]>>;
  };

  const handleWorkoutPlan = () => {
    const isAlreadySaved = plan.some((item) => item.id === workout.id);
    const isPlanFull = plan.length >= 5;

    if (isAlreadySaved) {
      toast.warn(`${workout.name} is already saved!`);
      return;
    } else if (isPlanFull) {
      toast.error("You've reached the 5-lift cap for today!");
      return;
    } else {
      setPlan((prevSaved) => [...prevSaved, workout]);
      toast.success(`${workout.name} added to today's plan 🎉`);
    }
  };
  return (
    <button
      onClick={() => handleWorkoutPlan()}
      className="flex items-center gap-2 rounded-xl bg-[#a3e635] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-black transition-all hover:bg-[#86efac]"
    >
      <PlusCircle className="h-4 w-4" />
      Add to today&apos;s plan
    </button>
  );
};

export default PlanButton;

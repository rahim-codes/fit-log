"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { Ifitlog } from "@/type/type";
import { Bookmark } from "lucide-react";
import { useContext, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

const SavedButton = ({ workout }: { workout: Ifitlog }) => {
  const { saved, setSaved } = useContext(WorkoutContext) as {
    saved: Ifitlog[];
    setSaved: Dispatch<SetStateAction<Ifitlog[]>>;
  };

  const handleSave = () => {
    const isAlreadySaved = saved.some((item) => item.id === workout.id);
    if (isAlreadySaved) {
      toast.warn(`${workout.name} is already saved!`);
    } else {
      setSaved((prevSaved) => [...prevSaved, workout]);
      toast.success(`${workout.name} added to Saved 🎉`);
    }
  };
  return (
    <button
      onClick={() => handleSave()}
      className="flex items-center gap-2 rounded-xl border border-gray-800 bg-[#12141a] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white transition-all hover:bg-gray-800"
    >
      <Bookmark className="h-4 w-4" />
      Save for later
    </button>
  );
};

export default SavedButton;

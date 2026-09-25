import { Ifitlog } from "@/type/type";
import { Check, Clock, Flame, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface SavedCardProps {
  item: Ifitlog;
  handleRemove: (id: number) => void;
  handleMarkAsDone: (id: number) => void;
}

export default function SavedCard({
  item,
  handleRemove,
  handleMarkAsDone,
}: SavedCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between rounded-2xl bg-[#12141a] border border-gray-800/60 p-4 gap-4 transition-colors hover:border-gray-700">
      {/* Left Side: Thumbnail + Info */}
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl bg-gray-800">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-base font-black uppercase tracking-wide text-white">
            {item.name}
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">{item.equipment}</p>

          {/* Metrics Row */}
          <div className="flex items-center gap-4 mt-2 text-xs text-gray-300">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-[#a3e635]" />
              {item.duration} min
            </span>
            <span className="flex items-center gap-1">
              <Flame className="h-3.5 w-3.5 text-[#a3e635]" />
              {item.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 text-[#a3e635]" />
              {item.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Right Side: Action Buttons */}
      <div className="flex items-center gap-3 w-full md:w-auto justify-end border-t md:border-t-0 pt-3 md:pt-0 border-gray-800">
        <Link
          href={`/workouts/${item.id}`}
          className="rounded-full border border-gray-700/80 bg-transparent px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-gray-800"
        >
          View Details
        </Link>

        <button
          onClick={() => handleMarkAsDone(item.id)}
          className="flex items-center gap-1.5 rounded-full bg-[#a3e635] px-5 py-2.5 text-xs font-bold text-black transition-colors hover:bg-[#86efac]"
        >
          <Check className="h-3.5 w-3.5 stroke-3" />
          Mark as Done
        </button>

        <button
          onClick={() => handleRemove(item.id)}
          aria-label="Remove workout"
          className="p-2 text-gray-500 transition-colors hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

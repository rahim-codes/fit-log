import { Ifitlog } from "@/type/type";
import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface WorkoutCardProps {
  workout: Ifitlog;
}

export default function LibraryCard({ workout }: WorkoutCardProps) {
  return (
    <Link href={`/workouts/${workout.id}`} className="block">
      <div className="group relative overflow-hidden rounded-2xl bg-[#12141a] text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        <div className="relative h-50 w-full overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((group, index) => (
              <span
                key={index}
                className="rounded-full bg-[#a3e635] px-3 py-1 text-xs font-black uppercase text-black"
              >
                {group}
              </span>
            ))}
          </div>

          <h3 className="mt-4 text-xl font-bold uppercase tracking-wide text-white">
            {workout.name}
          </h3>

          <p className="mt-1 text-sm text-gray-400">{workout.equipment}</p>

          <div className="my-4 border-t border-gray-800" />

          <div className="flex items-center gap-5 text-sm text-gray-300">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-gray-400" />
              <span>{workout.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Flame className="h-4 w-4 text-gray-400" />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-gray-400" />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

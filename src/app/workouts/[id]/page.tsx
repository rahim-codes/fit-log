import { Ifitlog } from "@/type/type";
import { Bookmark, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const getWorkoutById = async (id: string): Promise<Ifitlog | null> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const workouts: Ifitlog[] = await res.json();
  return workouts.find((item) => String(item.id) === id) || null;
};

export default async function WorkoutDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workout = await getWorkoutById(id);

  if (!workout) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-white">
        <h2 className="text-2xl font-bold">Workout Not Found</h2>
        <Link
          href="/workouts"
          className="mt-4 btn bg-[#a3e635] text-black hover:bg-[#86efac]"
        >
          Back to Workouts
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0c] px-4 py-8 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column - Large Workout Image */}
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl lg:col-span-6 lg:aspect-3/4">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Right Column - Workout Details */}
          <div className="flex flex-col lg:col-span-6">
            {/* Title & Description */}
            <h1 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
              {workout.name}
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              {workout.description}
            </p>

            {/* Muscle Group Badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((group, index) => (
                <span
                  key={index}
                  className="rounded-full bg-[#a3e635] px-3.5 py-1 text-xs font-black uppercase text-black"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Key Specs Card Table */}
            <div className="mt-6 divide-y divide-gray-800/60 rounded-2xl bg-[#12141a] p-5 text-sm">
              <div className="flex justify-between py-2.5">
                <span className="font-bold uppercase tracking-wider text-gray-400">
                  EQUIPMENT
                </span>
                <span className="font-semibold text-white">
                  {workout.equipment}
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="font-bold uppercase tracking-wider text-gray-400">
                  DIFFICULTY
                </span>
                <span className="font-semibold text-white">
                  {workout.difficulty}
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="font-bold uppercase tracking-wider text-gray-400">
                  SETS
                </span>
                <span className="font-semibold text-white">{workout.sets}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="font-bold uppercase tracking-wider text-gray-400">
                  REPS
                </span>
                <span className="font-semibold text-white">{workout.reps}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="font-bold uppercase tracking-wider text-gray-400">
                  DURATION
                </span>
                <span className="font-semibold text-white">
                  {workout.duration} min
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="font-bold uppercase tracking-wider text-gray-400">
                  CALORIES
                </span>
                <span className="font-semibold text-white">
                  {workout.caloriesBurned} kcal
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="font-bold uppercase tracking-wider text-gray-400">
                  RATING
                </span>
                <span className="font-semibold text-white">
                  {workout.rating}
                </span>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            {workout.instructions && workout.instructions.length > 0 && (
              <div className="mt-6">
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  INSTRUCTIONS
                </h2>
                <ol className="mt-3 space-y-2 text-sm text-gray-300">
                  {workout.instructions.map((step, idx) => (
                    <li key={idx} className="flex gap-2 leading-relaxed">
                      <span className="font-bold text-gray-500">
                        {idx + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-end gap-3 pt-2">
              <button className="flex items-center gap-2 rounded-xl bg-[#a3e635] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-black transition-all hover:bg-[#86efac]">
                <PlusCircle className="h-4 w-4" />
                Add to today's plan
              </button>
              <button className="flex items-center gap-2 rounded-xl border border-gray-800 bg-[#12141a] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white transition-all hover:bg-gray-800">
                <Bookmark className="h-4 w-4" />
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

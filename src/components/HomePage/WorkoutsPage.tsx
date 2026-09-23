import { Ifitlog } from "@/type/type";
import WorkoutCard from "./WorkoutCard";

const getData = async (): Promise<Ifitlog[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

export default async function WorkoutsPage() {
  const workouts = await getData();
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold">THE LIBRARY</h2>
      <p className="text-gray-300">
        Twelve lifts covering every major muscle group.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
}

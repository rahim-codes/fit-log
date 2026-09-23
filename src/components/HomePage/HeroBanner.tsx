import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/banner.png";

export default function HeroBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
      <div className="relative overflow-hidden rounded-2xl bg-[#12141a] px-8 py-12 md:px-16 md:py-10 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="z-10 lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-[#a3e635]">
              WORKOUT LIBRARY
            </span>

            <h1 className="mt-4 text-4xl font-bold uppercase leading-tight tracking-tight text-white md:text-5xl lg:text-5xl">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-400 md:text-base">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <div className="mt-8">
              <Link
                href="/workouts"
                className="inline-block rounded-lg bg-[#a3e635] px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-black transition-all hover:bg-[#86efac] active:scale-95"
              >
                BROWSE WORKOUTS
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative h-72 w-full max-w-sm sm:h-96 lg:h-100">
              <Image
                src={hero}
                alt="Gym Machine Illustration"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

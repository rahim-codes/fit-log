import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-900 bg-[#0a0a0c] py-20 text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FitLog Logo"
            width={24}
            height={24}
            className="h-6 w-auto object-contain"
          />
          <span className="text-base font-black tracking-wider text-white uppercase">
            FITLOG
          </span>
        </Link>

        <p className="text-xs text-gray-500 sm:text-sm">
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log
          honest.
        </p>
      </div>
    </footer>
  );
}

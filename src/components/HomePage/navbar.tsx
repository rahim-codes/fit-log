import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

export default function Navbar() {
  return (
    <div className="bg-base-100 shadow-sm">
      {/* Container wrapper with auto margin and horizontal padding */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="navbar p-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link href="/workouts">Workouts</Link>
                </li>
                <li>
                  <Link href="/plan">My Plan</Link>
                </li>
              </ul>
            </div>
            <Link href="/" className="btn btn-ghost text-xl gap-2">
              <Image src={logo} alt="FITLOG Logo" width={32} height={32} />
              FITLOG
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/workouts">Workouts</Link>
              </li>
              <li>
                <Link href="/plan">My Plan</Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end gap-2">
            <Link href="/plan" className="btn">
              Plan
            </Link>
            <Link href="/saved" className="btn">
              Saved
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

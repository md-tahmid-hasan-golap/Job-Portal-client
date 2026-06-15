"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { AuthContext } from "@/providers/AuthProvider";
import { Menu, X, LogOut } from "lucide-react";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your session.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
      background: "#0f172a",
      color: "#ffffff",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut();
        setOpen(false);
        Swal.fire({
          title: "Logged Out!",
          text: "You have been successfully logged out.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          background: "#0f172a",
          color: "#ffffff",
        });
      }
    });
  };

  const isActive = (path) => pathname === path;

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`pb-1 text-sm font-medium transition-all border-b-2 ${
            isActive("/")
              ? "border-blue-500 text-blue-400"
              : "border-transparent text-slate-300 hover:text-white"
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/jobs"
          className={`pb-1 text-sm font-medium transition-all border-b-2 ${
            isActive("/jobs")
              ? "border-blue-500 text-blue-400"
              : "border-transparent text-slate-300 hover:text-white"
          }`}
        >
          Jobs
        </Link>
      </li>
      {user && (
        <li>
          <Link
            href="/postaJob"
            className={`pb-1 text-sm font-medium transition-all border-b-2 ${
              isActive("/PostAJob")
                ? "border-blue-500 text-blue-400"
                : "border-transparent text-slate-300 hover:text-white"
            }`}
          >
            Post a Job
          </Link>
        </li>
      )}
      {user && (
        <li>
          <Link
            href="/myjobs"
            className={`pb-1 text-sm font-medium transition-all border-b-2 ${
              isActive("/myjobs")
                ? "border-blue-500 text-blue-400"
                : "border-transparent text-slate-300 hover:text-white"
            }`}
          >
            My Jobs
          </Link>
        </li>
      )}
      <li>
        <Link
          href="/about"
          className={`pb-1 text-sm font-medium transition-all border-b-2 ${
            isActive("/about")
              ? "border-blue-500 text-blue-400"
              : "border-transparent text-slate-300 hover:text-white"
          }`}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className={`pb-1 text-sm font-medium transition-all border-b-2 ${
            isActive("/contact")
              ? "border-blue-500 text-blue-400"
              : "border-transparent text-slate-300 hover:text-white"
          }`}
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white flex items-center gap-2"
          >
            <span className="bg-blue-600 px-2 py-1 rounded-lg text-sm">
              Job
            </span>{" "}
            Portal
          </Link>

          <ul className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
            {links}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <span className="text-sm text-slate-400 mr-2 hidden lg:inline">
                  Welcome,{" "}
                  <strong className="text-white font-medium">
                    {user?.displayName || "User"}
                  </strong>
                </span>
                <button
                  onClick={handleLogOut}
                  className="px-4 py-2 text-sm bg-red-600/10 hover:bg-red-600 border border-red-600/30 text-red-400 hover:text-white rounded-lg transition-all duration-200 flex items-center gap-1.5 font-medium"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 rounded-lg transition active:scale-95 shadow-lg shadow-blue-600/10"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-400 hover:text-white transition p-1"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-5 pt-2 border-t border-slate-800 space-y-4 animate-fadeIn">
            <ul className="flex flex-col gap-4 pl-1">{links}</ul>

            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              {user ? (
                <>
                  <div className="text-xs text-slate-400 px-1 mb-1">
                    Logged in as:{" "}
                    <span className="text-slate-200 font-semibold">
                      {user?.email}
                    </span>
                  </div>
                  <button
                    onClick={handleLogOut}
                    className="w-full px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-center font-medium text-sm transition flex items-center justify-center gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="w-full px-4 py-2.5 border border-slate-700 hover:border-slate-500 rounded-lg text-center font-medium text-sm text-slate-300 transition"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setOpen(false)}
                    className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-center font-medium text-sm text-white transition shadow-md"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`pb-1 border-b-2 ${
            isActive("/") ? "border-white" : "border-transparent"
          }`}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/jobs"
          className={`pb-1 border-b-2 ${
            isActive("/jobs") ? "border-white" : "border-transparent"
          }`}
        >
          Jobs
        </Link>
      </li>

      <li>
        <Link
          href="/about"
          className={`pb-1 border-b-2 ${
            isActive("/about") ? "border-white" : "border-transparent"
          }`}
        >
          About
        </Link>
      </li>

      <li>
        <Link
          href="/contact"
          className={`pb-1 border-b-2 ${
            isActive("/contact") ? "border-white" : "border-transparent"
          }`}
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          {/* Left - Logo */}
          <Link href="/" className="text-2xl font-bold">
            Job Portal
          </Link>

          {/* Center - Links */}
          <ul className="hidden md:flex gap-6 absolute left-1/2 -translate-x-1/2">
            {links}
          </ul>

          {/* Right - Auth Buttons */}
          <div className="hidden md:flex gap-3">
            <Link
              href="/login"
              className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <ul className="flex flex-col gap-3">{links}</ul>

            <div className="flex flex-col gap-2 mt-4">
              <Link
                href="/login"
                className="px-4 py-2 border border-white rounded-lg text-center"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-4 py-2 bg-blue-600 rounded-lg text-center"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

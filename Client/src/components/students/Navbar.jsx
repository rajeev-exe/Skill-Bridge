import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

// ---- Link sets per role -----------------------------------------------

const guestLinks = [
  { to: "/CourseList", label: "Courses" },
  { to: "/roadmaps", label: "Roadmaps" },
  { to: "/resume-analyzer", label: "Resume Analyzer" },
  { to: "/about", label: "About" },
];

const studentLinks = [
  { to: "/CourseList", label: "Courses" },
  { to: "/roadmaps", label: "Roadmaps" },
  { to: "/resume-analyzer", label: "Resume Analyzer" },
  { to: "/MyEnrolledCourses", label: "My Learning" },
];

const educatorLinks = [
  { to: "/educator", label: "Dashboard" },
  { to: "/educator/my-courses", label: "My Courses" },
  { to: "/educator/add-course", label: "Add Course" },
  { to: "/educator/students", label: "Students" },
];

// ---- Animated nav link (sliding underline) ------------------------------

const NavItem = ({ to, label }) => (
  <NavLink to={to} className="group relative py-2 text-sm font-medium">
    {({ isActive }) => (
      <>
        <span className={isActive ? "text-white" : "text-gray-400 transition-colors duration-300 group-hover:text-white"}>
          {label}
        </span>
        <span
          className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-white to-gray-500 transition-all duration-300 ease-out ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </>
    )}
  </NavLink>
);

// ---- Animated Sign In CTA (for logged-out visitors) ---------------------

const SignInButton = ({ onClick }) => (
  <button onClick={onClick} className="group relative">
    {/* soft pulsing glow behind the button */}
    <span className="absolute inset-0 rounded-full bg-white/20 blur-md animate-pulse" />
    <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-transform duration-300 group-hover:scale-105">
      <span className="relative z-10">Sign In</span>
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
      />
    </span>
  </button>
);

// ---- Role pill (for educators) ------------------------------------------

const RolePill = ({ label }) => (
  <span className="hidden items-center rounded-full border border-gray-700 bg-[#171717] px-3 py-1 text-xs font-medium tracking-wide text-gray-400 sm:flex">
    {label}
  </span>
);

// ---- Search input ---------------------------------------------------------

const SearchBar = () => (
  <div className="hidden items-center rounded-xl border border-gray-800 bg-[#141414] px-3 py-2 transition-colors duration-300 focus-within:border-gray-500 md:flex">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="opacity-50">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" className="text-gray-400" />
      <path d="M21 21l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gray-400" />
    </svg>
    <input
      type="text"
      placeholder="Search courses..."
      className="ml-3 w-44 bg-transparent text-sm text-white placeholder-gray-500 outline-none lg:w-56"
    />
  </div>
);

// ---- Logo -----------------------------------------------------------------

const Logo = () => (
  <Link to="/" className="group flex select-none items-center">
    <span className="text-2xl font-black tracking-tight text-white transition-all duration-300 group-hover:tracking-wide">
      Skill<span className="text-gray-500 group-hover:text-white transition-colors duration-300">Bridge</span>
    </span>
  </Link>
);

// ---- Main Navbar ------------------------------------------------------------

const Navbar = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const [mobileOpen, setMobileOpen] = useState(false);

  const role = user?.publicMetadata?.role; // "educator" | "student" | undefined
  const isEducator = role === "educator";
  const links = !user ? guestLinks : isEducator ? educatorLinks : studentLinks;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-[#0A0A0A]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-12">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <NavItem key={link.to} to={link.to} label={link.label} />
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {!isEducator && <SearchBar />}

          {user ? (
            <div className="flex items-center gap-3">
              {isEducator && <RolePill label="Educator" />}
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <SignInButton onClick={() => openSignIn()} />
          )}

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-800 text-gray-400 transition-colors duration-300 hover:text-white lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center gap-[5px]">
              <span className={`h-px w-4 bg-current transition-transform duration-300 ${mobileOpen ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`h-px w-4 bg-current transition-opacity duration-300 ${mobileOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`h-px w-4 bg-current transition-transform duration-300 ${mobileOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-gray-800 bg-[#0A0A0A] transition-all duration-300 ease-out lg:hidden ${
          mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  isActive ? "bg-[#171717] text-white" : "text-gray-400 hover:bg-[#141414] hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
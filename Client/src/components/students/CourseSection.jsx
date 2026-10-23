import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { allCourses } from "../../data/courses";
import CourseCard from "./CourseCard";

// Homepage only teases the top picks — DSA leads, then the next three
// verified courses. The full catalog lives on /course-list.
const featuredCourses = allCourses.slice(0, 29);

const CourseSection = () => {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const step = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="bg-[#0A0A0A] px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
              Curated, not generated
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Learn from the best
            </h2>
            <p className="mt-2 max-w-xl text-sm text-gray-500">
              A handful of verified playlists to start with — DSA, Java, Python, and Web
              Development. Everything else lives in the full course library.
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex shrink-0 gap-2">
            <button
              onClick={() => scrollByCard(-1)}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-colors duration-200 hover:border-gray-500 hover:text-white"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-colors duration-200 hover:border-gray-500 hover:text-white"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Slider track */}
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {featuredCourses.map((course) => (
            <div
              key={course.id}
              data-card
              className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[calc(25%-18px)]"
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/course-list"
            onClick={() => window.scrollTo(0, 0)}
            className="group inline-flex items-center gap-2 rounded-full border border-gray-700 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-gray-400"
          >
            View all courses
            <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
import React, { useState } from "react";
import { Clock, User, PlayCircle, ArrowUpRight } from "lucide-react";

// Deterministic "no photo, no problem" placeholder — renders instead of a
// broken <img> whenever course.thumbnail is missing or fails to load, so a
// bad/expired link never shows up as a broken image in the UI.
const ThumbnailFallback = ({ category }) => (
  <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
    {/* faint drifting grid texture, purely decorative */}
    <div
      className="absolute inset-0 opacity-[0.07] transition-transform duration-700 ease-out group-hover:scale-110"
      style={{
        backgroundImage:
          "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    />
    <PlayCircle
      size={30}
      strokeWidth={1.5}
      className="relative text-gray-600 transition-all duration-300 group-hover:scale-110 group-hover:text-gray-300"
    />
    <span className="relative text-xs font-medium tracking-wide text-gray-600 transition-colors duration-300 group-hover:text-gray-400">
      {category}
    </span>
  </div>
);

const CourseCard = ({ course }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = course.thumbnail && !imgFailed;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-800 bg-[#111111] transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]">
      {/* animated corner glow, only visible on hover */}
      <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-white/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#0d0d0d]">
        {showImage ? (
          <img
            src={course.thumbnail}
            alt={course.title}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        ) : (
          <ThumbnailFallback category={course.category} />
        )}

        {/* dark gradient so the category chip always stays legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/10" />

        {/* play button that scales in on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-transform duration-300 group-hover:scale-100">
            <PlayCircle size={22} className="text-black" strokeWidth={1.75} />
          </div>
        </div>

        <span className="absolute left-3 top-3 rounded-full border border-gray-700 bg-black/70 px-2.5 py-1 text-[11px] font-medium text-gray-300 backdrop-blur-sm">
          {course.category}
        </span>
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col gap-3 p-4">
        <h3 className="line-clamp-2 text-base font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-white">
          {course.title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <User size={13} />
            {course.instructor}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={13} />
            {course.duration}
          </span>
        </div>

        {course.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {course.tags.slice(0, 3).map((tag, i) => (
              <span
                key={tag}
                style={{ transitionDelay: `${i * 40}ms` }}
                className="rounded-md border border-gray-800 px-2 py-0.5 text-[11px] text-gray-400 transition-colors duration-300 group-hover:border-gray-600 group-hover:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Watch CTA — shimmer sweep + arrow slide on hover */}
        <a
          href={course.playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn relative mt-auto flex items-center justify-center gap-1.5 overflow-hidden rounded-lg bg-white py-2.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="relative z-10">Watch Now</span>
          <ArrowUpRight
            size={15}
            className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 ease-in-out group-hover/btn:translate-x-full"
          />
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
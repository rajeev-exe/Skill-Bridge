import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "../../components/students/SearchBar";
import CourseSection from "../../components/students/CourseSection";
import { Link } from "react-router-dom";
import TestimonialsSection from "../../components/students/TestimonialsSection";

const Hero = () => {
  return (
    <section className="bg-[#0D0D0D] py-24 px-5 text-center">

      <div className="max-w-6xl mx-auto text-center">

        <span className="inline-block px-4 py-2 rounded-full bg-[#1A1A1A] border border-gray-700 text-gray-300 text-sm mb-8">
          🚀 Learn Smarter with Curated Free Resources
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">

          Discover the
          <span className="relative text-gray-300 ml-3">

            Best Free Tech Courses

            <img
              src={assets.sketch}
              alt=""
              className="absolute -bottom-2 left-0 w-full opacity-40"
            />

          </span>

          <br />

          from YouTube in One Place

        </h1>

        <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-8">

          Stop wasting hours searching for the right tutorial.
          We carefully curate the highest-rated YouTube playlists,
          organize them into structured learning paths, and help
          you become job-ready through roadmaps, projects, and
          AI-powered resume skill-gap analysis.

        </p>

        <div className="mt-12">
          <SearchBar />
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-10">

          <Link
            to="/CourseList"
            className="bg-gray-700 hover:bg-gray-600 px-7 py-3 rounded-xl text-white font-semibold transition"
          >
            Explore Courses
          </Link>

          <Link
            to="/resume-analyzer"
            className="border border-gray-600 hover:border-gray-400 px-7 py-3 rounded-xl text-gray-300 hover:text-white transition"
          >
            Analyze Resume
          </Link>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">

          <div>
            <h2 className="text-3xl font-bold text-white">500+</h2>
            <p className="text-gray-400 mt-2">
              Curated Courses
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">50+</h2>
            <p className="text-gray-400 mt-2">
              Career Roadmaps
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">
              100%
            </h2>
            <p className="text-gray-400 mt-2">
              Free Learning
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">
              AI
            </h2>
            <p className="text-gray-400 mt-2">
              Resume Analyzer
            </p>
          </div>

        </div>

      </div>
      <CourseSection />
      <TestimonialsSection/>
    </section>
  );
};

export default Hero;
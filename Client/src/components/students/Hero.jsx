import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="bg-[#0D0D0D] py-24 px-5">

      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">

          Empower your future with
          <br />

          courses designed to

          <span className="relative ml-3 text-gray-300">
            fit your choice

            <img
              src={assets.sketch}
              alt=""
              className="absolute -bottom-2 left-0 w-full opacity-40"
            />

          </span>

        </h1>

        <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto">

          We bring together world-class instructors, interactive content,
          and a supportive learning community to help you achieve your
          personal and professional goals.

        </p>

        <div className="mt-12">
          <SearchBar />
        </div>

      </div>

    </section>
  );
};

export default Hero;
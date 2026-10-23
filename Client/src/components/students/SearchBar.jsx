import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ data }) => {

    const navigate = useNavigate();

    const [input, setInput] = useState(data || "");

    const onSearchHandler = (e) => {
        e.preventDefault();
        navigate("/CourseList/" + input);
    };

    return (

        <form
            onSubmit={onSearchHandler}
            className="max-w-3xl mx-auto bg-[#1A1A1A] border border-gray-700 rounded-xl flex items-center overflow-hidden shadow-xl"
        >

            <div className="px-5">

                <img
                    src={assets.search_icon}
                    className="w-5 opacity-70"
                    alt=""
                />

            </div>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Search for courses..."
                className="flex-1 bg-transparent py-4 text-white placeholder:text-gray-500 outline-none"
            />

            <button
                className="bg-gray-700 hover:bg-gray-600 text-white px-10 py-4 transition-all duration-300"
            >
                Search
            </button>

        </form>

    );
};

export default SearchBar;
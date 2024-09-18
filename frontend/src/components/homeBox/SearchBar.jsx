import React from 'react'

const SearchBar = () => {
    const handleFindMatch = (e) =>{
        e.preventDefault();
        console.log("Match Found");
    }
    return (
        <form onSubmit={handleFindMatch} className="relative mt-8 rounded-full sm:mt-12">
        <div className="relative">
        <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
            <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                <svg
                className="w-5 h-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
                </svg>
            </div>
            <input
                type="text"
                placeholder="Try 'diabetes' or 'heart attack'"
                className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 focus:border-transparent focus:ring-0"
            />
            </div>
        </div>
        <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
            <button
            type="submit"
            className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase bg-white rounded-full sm:w-auto sm:py-3"
            >
            Find Matches
            </button>
        </div>
    </form>
    )
}

export default SearchBar
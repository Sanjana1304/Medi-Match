import React, { useState } from 'react';
import coverimg from '../assets/coverimg.jpeg';

const LandPage = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="">
      {/* Header Section */}
      <header className="py-4 bg-black sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="shrink-0">
              <a href="#" className="flex">
                <span className='text-white text-xl'>MediMatch</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <span aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </span>
                ) : (
                  <span aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center space-x-10 lg:ml-20 lg:space-x-12">
              <a href="#" className="text-base font-normal text-gray-400 transition hover:text-white">
                Purpose
              </a>
              <a href="#" className="text-base font-normal text-gray-400 transition hover:text-white">
                Features
              </a>
              <a href="#" className="text-base font-normal text-gray-400 transition hover:text-white">
                Testimonals
              </a>
              <a href="#" className="text-base font-normal text-gray-400 transition hover:text-white">
                About Us
              </a>
            </nav>

            {/* CTA Button */}
            <div className="relative hidden md:inline-flex">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
              <a
                href="#"
                className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                role="button"
              >
                Sign In
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {expanded && (
            <nav className="mt-4">
              <div className="flex flex-col pt-8 pb-4 space-y-6">
                <a href="#" className="text-base font-normal text-gray-400 transition hover:text-white">
                Purpose
                </a>
                <a href="#" className="text-base font-normal text-gray-400 transition hover:text-white">
                  Features
                </a>
                <a href="#" className="text-base font-normal text-gray-400 transition hover:text-white">
                Testimonals
                </a>
                <a href="#" className="text-base font-normal text-gray-400 transition hover:text-white">
                
                About Us
                </a>
                <div className="relative inline-flex items-center justify-center group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  <a
                    href="#"
                    className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                    role="button"
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            <div>
              <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Empowering Healthcare with Data-Driven Patient Case Matching
              </h1>
              <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
              Leverage advanced machine learning to find similar patient cases, improve treatment plans, and drive better clinical outcomes.
              </p>

              {/* Search Form */}
              <form className="relative mt-8 rounded-full sm:mt-12">
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
                      type="email"
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

              
            </div>
            <div className='text-white'>
                <img src={coverimg} alt='coverimg' className='object-cover w-full h-full rounded-lg'/>
            </div>
            {/* Additional content can be placed here for the second column */}
          </div>
        </div>
      </section>

        {/* Purpose Section */}
        <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
              <div>
                <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                  Purpose
                </h2>
                <h4 className=" mt-3 font-normal text-white sm:text-sm lg:text-xl xl:text-xl">
                Revolutionizing Patient Care Through Data-Driven Insights
                </h4>
              </div>
              <div>
                <p className="text-lg font-normal text-gray-400">
                At MediMatch, our purpose is to enhance the quality of healthcare by harnessing the power of advanced technology. We aim to transform patient care by providing medical professionals with the tools they need to find and analyze similar patient cases efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
                <div>
                    <p className="text-lg font-normal text-gray-400">
                        <ul>
                            <li className='mb-3'>🔍 Advanced Case Search</li>
                            <li className='mb-3'>📊 Insightful Case Comparisons</li>
                            <li className='mb-3'>💡 Smart Case Recommendations</li>
                            <li className='mb-3'>📈 Data-Driven Insights</li>
                            <li className='mb-3'>🌟 User-Friendly Interface</li>
                            <li className='mb-3'>🚀 Continuous Innovation</li>
                        </ul>
                    </p>
                </div>
              <div>
                <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                  Features
                </h2>
                <h4 className=" mt-3 font-normal text-white sm:text-lg lg:text-xl xl:text-xl">
                Unlock the Future of Patient Care with Cutting-Edge Features
                </h4>
              </div>
              
            </div>

          </div>
        </section>

        {/* About Section */}
        <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
              <div>
                <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                  About Us
                </h2>
                <h4 className="text-3xl mt-3 font-normal text-white sm:text-lg lg:text-xl xl:text-xl">
                Advanced Machine Learning for Patient Case Matching
                </h4>
              </div>
              <div>
                <p className="text-lg font-normal text-gray-400">
                MediMatch is a AI powered web application that provides users with patient case similarity. Our platform uses state-of-the-art machine learning algorithms to analyze patient data and find similar cases. By leveraging advanced technology, we help medical professionals make more informed decisions and improve patient outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default LandPage;

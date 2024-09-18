import React, { useState } from 'react';
import coverimg from '../assets/coverimg.jpeg';
import Modal from './Modal';
import UserAuth from './UserAuth';
import SearchBar from '../components/homeBox/SearchBar';

const LandPage = () => {
  const [expanded, setExpanded] = useState(false);

  const [isAuthOpen, setIsAuthOpen] = useState(false);


  const handleSignIn = (e) => {
    e.preventDefault();
    setIsAuthOpen(true);
  }

  const closeAuth = () => {
    setIsAuthOpen(false);
  };

  return (
    <div className="">
      {/* Header Section */}
      <header className="py-4 bg-black sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* App Name */}
            <div className="">
              <a href="#" className="flex">
                <span className='text-white text-xl'>MediMatch</span>
              </a>
            </div>

            {/* Mobile Menu(Hamburger) Button */}
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
              <a href="#purpose" className="text-base font-normal text-gray-400 transition hover:text-white">
                Purpose
              </a>
              <a href="#feature" className="text-base font-normal text-gray-400 transition hover:text-white">
                Features
              </a>
              <a href="#testi" className="text-base font-normal text-gray-400 transition hover:text-white">
                Testimonals
              </a>
              <a href="#aboutus" className="text-base font-normal text-gray-400 transition hover:text-white">
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
                onClick={handleSignIn}
              >
                Sign In
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {expanded && (
            <nav className="mt-4">
              <div className="flex flex-col pt-8 pb-4 space-y-6">
                <a href="#purpose" className="text-base font-normal text-gray-400 transition hover:text-white">
                Purpose
                </a>
                <a href="#feature" className="text-base font-normal text-gray-400 transition hover:text-white">
                  Features
                </a>
                <a href="#testi" className="text-base font-normal text-gray-400 transition hover:text-white">
                Testimonals
                </a>
                <a href="#aboutus" className="text-base font-normal text-gray-400 transition hover:text-white">
                
                About Us
                </a>
                <div className="relative inline-flex items-center justify-center group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  <a
                    href="#"
                    className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                    role="button"
                    onClick={handleSignIn}
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

              <SearchBar/>
              
            </div>
            <div className='text-white'>
                <img src={coverimg} alt='coverimg' className='object-cover w-full h-full rounded-lg'/>
            </div>
          </div>
        </div>
      </section>

        {/* Purpose Section */}
        <section id='purpose' className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 gap-x-16">
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

        {/* Features Section testing */}
        <section id='feature' className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
              
              {/* Heading and Subheading */}
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                  Features
                </h2>
                <h4 className="mt-3 font-normal text-white sm:text-lg lg:text-xl xl:text-xl">
                  Unlock the Future of Patient Care with Cutting-Edge Features
                </h4>
              </div>

              {/* Features List */}
              <div className="order-2 md:order-1 text-gray-400 text-lg">
                
                  <ul>
                    <li className="mb-3">🔍 Advanced Case Search</li>
                    <li className="mb-3">📊 Insightful Case Comparisons</li>
                    <li className="mb-3">💡 Smart Case Recommendations</li>
                    <li className="mb-3">📈 Data-Driven Insights</li>
                    <li className="mb-3">🌟 User-Friendly Interface</li>
                    <li className="mb-3">🚀 Continuous Innovation</li>
                  </ul>
                
              </div>

            </div>
          </div>
        </section>


        {/* Testimonals Section */}
        <section id='testi' className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <div>
                <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                  Testimonals
                </h2>
                <h4 className="text-xl mt-1 font-normal text-white sm:text-lg lg:text-xl xl:text-xl">
                  What Our Users Are Saying
                </h4>
              </div>
              <div>
                <p className="mt-4 text-lg mx-auto font-normal text-gray-400 w-3/4">
                "MediMatch has been a game-changer for our team. We are now able to find similar patient cases quickly and easily, which has improved our treatment plans and patient outcomes." - Dr. Smith
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id='aboutus' className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 gap-x-16">
              <div>
                <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                  About Us
                </h2>
                <h4 className=" mt-3 font-normal text-white sm:text-lg lg:text-xl xl:text-xl">
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

        
        {isAuthOpen && (
          <Modal onClose={closeAuth}>
              <UserAuth/>
          </Modal>
        )}
    </div>
  );
};

export default LandPage;

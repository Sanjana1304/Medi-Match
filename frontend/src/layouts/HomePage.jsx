import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosConfig';
import { useQuery } from 'react-query'
import { fetchUserData } from '../api-client';
import '../HomePage.css';
import SearchBar from '../components/homeBox/SearchBar';
import CardScroller from '../components/homeBox/CardScroller';
import NewsFeed from '../components/homeBox/NewsFeed';
import QuickLinks from '../components/homeBox/QuickLinks';

const HomePage = () => {
    const [expanded, setExpanded] = useState(false);
    const navig = useNavigate();

    const {data : userdata} = useQuery('fetchUserData',fetchUserData);
    console.log(userdata);

    const handleSignOut = async() => {
        try {
            await api.post('/api/auth/logout');
            navig('/');
        } catch (error) {
            console.error('Error logging out:', error);
        }finally{
          alert("Logged Out Successfully");
        }
    }

    return (
        <div className="homepage-container text-white">
        
        <div className="content border">
            {/* Header Section */}
            <header className="py-4 sm:py-6">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between text-sm">
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
                    
                    <a href="#" className="relative text-base font-normal text-gray-400 transition hover:text-white">
                        Quick Links
                    </a>
                    <a href="#" className="relative text-base font-normal text-gray-400 transition hover:text-white">
                        Recommendations 
                    </a>
                    <a href="#" className="relative text-base font-normal text-gray-400 transition hover:text-white">
                        Research Feed
                    </a>
                    <a href="#" className="relative text-base font-normal text-gray-400 transition hover:text-white">
                        Bookmarked Cases
                    </a>
                    </nav>

                    {/* CTA Button */}
                    <div className="dropdown relative hidden md:inline-flex">
                        <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                        <a
                            className="dropbtn relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                            role="button"
                        >
                            My Profile
                        </a>
                        <div className="dropdown-content">
                            <p className='text-lg'>{userdata?.name}</p>
                            <p>{userdata?.email}</p>
                        </div>

                    </div>

                    <div className="relative hidden md:inline-flex">
                        <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                        <a
                            className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                            role="button"
                            onClick={handleSignOut}
                        >
                            Sign Out
                        </a>
                    </div>


                </div>


                    

                {/* Mobile Menu */}
                {expanded && (
                    <nav className="mt-4">
                        <div className="flex flex-col pt-8 pb-4 space-y-6">
                            <a href="#" className="relative text-base font-normal text-gray-400 transition hover:text-white">
                            Quick Links
                            </a>
                            <a href="#" className="relative text-base font-normal text-gray-400 transition hover:text-white">
                            Recommendations
                            </a>
                            <a href="#" className="relative text-base font-normal text-gray-400 transition hover:text-white">
                            Research Feed
                            </a>
                            <a href="#" className="relative text-base font-normal text-gray-400 transition hover:text-white">
                            
                            Bookmarked Cases
                            </a>

                            <div className="relative inline-flex items-center justify-center group">
                                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                                <a
                                    className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                                    role="button"
                                    onClick={handleSignOut}
                                >
                                    Sign Out
                                </a>
                            </div>
                        </div>
                    </nav>
                )}
                </div>
            </header>
            
            <div className='p-10'>
            <SearchBar/>
            </div>

            <div>
                <h1 className='px-10 text-3xl font-bold'>Recent Cases</h1>
                <CardScroller cards={[1,2,3,4,5,6,7,8,9,10]} />
            </div>

            <div>
                <h1 className='px-10 text-3xl font-bold'>Quick Links</h1>
                <QuickLinks/>
            </div>

            <div>
                <h1 className='px-10 text-3xl font-bold'>Recommendations</h1>
                <CardScroller cards={[1,2,3,4,5,6,7,8,9,10]} />
            </div>

            <div>
                <h1 className='px-10 text-3xl font-bold mb-5'>Research Feed</h1>
                <NewsFeed/>
            </div>

            <div>
                <h1 className='mt-5 px-10 text-3xl font-bold'>Bookmarked Cases</h1>
                <CardScroller cards={[1,2,3,4,5,6,7,8,9,10]} />
            </div>
        
            
            
        </div>
        </div>
    );
};

export default HomePage;

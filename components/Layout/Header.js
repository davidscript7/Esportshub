import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <header className="bg-gaming-dark shadow-md shadow-black/30 border-b border-gray-800">
            <div className="container mx-auto flex justify-between items-center h-16 px-4">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
            <span className="text-2xl font-tech font-bold bg-clip-text text-transparent bg-gradient-to-r from-gaming-accent to-cyber-400">
              KLiC<span className="text-gaming-highlight">.gg</span>
            </span>
                    </Link>
                </div>

                {/* Center Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/player-analysis">Player Analysis</NavLink>
                    <NavLink to="/team-comparison">Team Comparison</NavLink>
                    <NavLink to="/tournament-stats">Tournament Stats</NavLink>
                </nav>

                {/* Right Icons */}
                <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-full hover:bg-gaming-panel text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>

                    {/* Profile Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center space-x-3 p-1 rounded-full hover:bg-gaming-panel"
                        >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gaming-accent to-gaming-highlight flex items-center justify-center text-white font-bold">
                                P
                            </div>
                        </button>

                        {isProfileOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-gaming-panel border border-gray-700 rounded-lg shadow-lg z-50">
                                <div className="p-3 border-b border-gray-700">
                                    <p className="font-semibold text-white">Player Name</p>
                                    <p className="text-sm text-gray-400">Pro Gamer</p>
                                </div>
                                <div className="py-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gaming-accent/20 hover:text-white">Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gaming-accent/20 hover:text-white">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gaming-accent/20 hover:text-white">Sign out</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

// NavLink Component with active state
const NavLink = ({ to, children }) => {
    // This would usually use useLocation from react-router-dom to check if active
    const isActive = window.location.pathname === to;

    return (
        <Link
            to={to}
            className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                isActive
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200'
            }`}
        >
            {children}
            {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gaming-accent"></span>
            )}
        </Link>
    );
};

export default Header;
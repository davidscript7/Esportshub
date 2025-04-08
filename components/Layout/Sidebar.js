import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isMobile, setMobileOpen }) => {
    const location = useLocation();

    const handleLinkClick = () => {
        if (isMobile) {
            setMobileOpen(false);
        }
    };

    const menuItems = [
        {
            title: 'Main',
            items: [
                {
                    name: 'Dashboard',
                    path: '/',
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    )
                },
                {
                    name: 'Player Analysis',
                    path: '/players',
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    )
                },
                {
                    name: 'Team Comparison',
                    path: '/teams',
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    )
                },
                {
                    name: 'Tournament Stats',
                    path: '/tournaments',
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    )
                }
            ]
        },
        {
            title: 'Analytics',
            items: [
                {
                    name: 'Match History',
                    path: '/match-history',
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )
                },
                {
                    name: 'Heatmaps',
                    path: '/heatmaps',
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                    )
                },
                {
                    name: 'Strategies',
                    path: '/strategies',
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                    )
                }
            ]
        }
    ];

    return (
        <aside className="w-64 bg-gaming-dark border-r border-gray-800 h-full flex flex-col">
            {/* Sidebar header */}
            <div className="p-4 border-b border-gray-800">
                <div className="flex items-center justify-center">
                    <span className="text-xl font-tech font-bold bg-clip-text text-transparent bg-gradient-to-r from-gaming-accent to-cyber-400">
                        KLiC<span className="text-gaming-highlight">.gg</span>
                    </span>
                </div>
            </div>

            {/* Menu items */}
            <div className="flex-grow overflow-y-auto py-4 px-3">
                {menuItems.map((section, idx) => (
                    <div key={idx} className="mb-6">
                        <h3 className="text-gray-500 uppercase tracking-wider text-xs font-semibold px-3 mb-2">
                            {section.title}
                        </h3>
                        <div className="space-y-1">
                            {section.items.map((item, itemIdx) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Link
                                        key={itemIdx}
                                        to={item.path}
                                        className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                                            isActive
                                                ? 'bg-gaming-accent/20 text-white'
                                                : 'text-gray-400 hover:bg-gaming-panel hover:text-white'
                                        }`}
                                        onClick={handleLinkClick}
                                    >
                                        <span className={`mr-3 ${isActive ? 'text-gaming-accent' : ''}`}>
                                            {item.icon}
                                        </span>
                                        <span className="font-medium text-sm">{item.name}</span>
                                        {isActive && (
                                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gaming-accent"/>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Sidebar footer */}
            <div className="p-4 border-t border-gray-800">
                <div className="bg-gaming-panel/50 rounded-lg p-3">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gaming-accent to-gaming-highlight flex items-center justify-center text-white font-bold">
                            P
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-white">Pro Account</p>
                            <p className="text-xs text-gray-400">Advanced Analytics</p>
                        </div>
                    </div>
                    <button className="mt-3 text-xs w-full py-1.5 bg-gaming-accent text-white rounded-md hover:bg-gaming-accent/90 transition-colors">
                        View Settings
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
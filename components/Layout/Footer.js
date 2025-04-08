import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gaming-dark border-t border-gray-800 py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <div className="flex items-center">
              <span className="text-xl font-tech bg-clip-text text-transparent bg-gradient-to-r from-gaming-accent to-cyber-400">
                KLiC<span className="text-gaming-highlight">.gg</span>
              </span>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">
                            Advanced esports analytics platform
                        </p>
                    </div>

                    <div className="flex space-x-6 md:space-x-12">
                        <div>
                            <h4 className="text-sm font-semibold text-white mb-3">Connect</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-gaming-accent transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3
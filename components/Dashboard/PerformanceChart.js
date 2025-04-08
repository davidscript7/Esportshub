import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-card-bg shadow-md py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center">
          <span className="text-xl font-gaming font-bold text-primary">
            KLiC<span className="text-accent">.gg</span> <span className="text-sm font-sans ml-2">Analytics</span>
          </span>
                </Link>

                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="text-white hover:text-accent transition-colors">
                        Dashboard
                    </Link>
                    <Link to="/players" className="text-white hover:text-accent transition-colors">
                        Jugadores
                    </Link>
                    <Link to="/teams" className="text-white hover:text-accent transition-colors">
                        Equipos
                    </Link>
                    <Link to="/tournaments" className="text-white hover:text-accent transition-colors">
                        Torneos
                    </Link>
                </nav>

                <div className="flex items-center">
                    <button className="btn-primary">
                        Iniciar Sesión
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
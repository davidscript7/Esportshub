import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Dashboard from './pages/Dashboard';

// Páginas temporales para la navegación
const PlayerAnalysis = () => (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-gaming font-bold text-primary">Análisis de Jugadores</h1>
        <p className="text-gray-300 mt-4">Esta sección mostrará análisis detallados de jugadores profesionales.</p>
    </div>
);

const TeamComparison = () => (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-gaming font-bold text-primary">Comparación de Equipos</h1>
        <p className="text-gray-300 mt-4">Esta sección permitirá comparar estadísticas entre equipos.</p>
    </div>
);

const TournamentStats = () => (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-gaming font-bold text-primary">Estadísticas de Torneos</h1>
        <p className="text-gray-300 mt-4">Esta sección mostrará información sobre torneos pasados y actuales.</p>
    </div>
);

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/players" element={<PlayerAnalysis />} />
                        <Route path="/teams" element={<TeamComparison />} />
                        <Route path="/tournaments" element={<TournamentStats />} />
                    </Routes>
                </main>
                <footer className="bg-card-bg py-6">
                    <div className="container mx-auto px-4 text-center text-gray-400">
                        <p>© 2025 KLiC.gg Analytics – Desarrollado para la entrevista</p>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
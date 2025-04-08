import React from 'react';
import PerformanceChart from '../components/Dashboard/PerformanceChart';
import PlayerComparison from '../components/Dashboard/PlayerComparison';

const Dashboard = () => {
    // Aquí podrías implementar una llamada a la API real para obtener datos

    // Datos de ejemplo de estadísticas para mostrar
    const topPlayerStats = [
        { id: 1, name: 'Faker', team: 'T1', kda: 5.7, winRate: 68 },
        { id: 2, name: 'ShowMaker', team: 'DK', kda: 4.9, winRate: 65 },
        { id: 3, name: 'Caps', team: 'G2', kda: 4.5, winRate: 62 },
        { id: 4, name: 'Knight', team: 'TES', kda: 4.8, winRate: 64 }
    ];

    const upcomingMatches = [
        { id: 1, teams: 'T1 vs DK', league: 'LCK', date: '2025-04-08 18:00' },
        { id: 2, teams: 'G2 vs FNC', league: 'LEC', date: '2025-04-09 16:00' },
        { id: 3, teams: 'C9 vs TL', league: 'LCS', date: '2025-04-10 20:00' }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <h1 className="text-3xl font-gaming font-bold text-primary">Dashboard de Análisis</h1>
                <div className="mt-4 md:mt-0">
                    <select className="bg-card-bg text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="lol">League of Legends</option>
                        <option value="valorant">Valorant</option>
                        <option value="csgo">CS:GO</option>
                        <option value="dota2">Dota 2</option>
                    </select>
                </div>
            </div>

            {/* Tarjetas de estadísticas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="stat-card">
                    <span className="text-gray-400 text-sm">Total de torneos</span>
                    <span className="text-3xl font-bold text-white mt-2">32</span>
                    <span className="text-green-400 text-sm mt-1">+4 este mes</span>
                </div>
                <div className="stat-card">
                    <span className="text-gray-400 text-sm">Equipos registrados</span>
                    <span className="text-3xl font-bold text-white mt-2">128</span>
                    <span className="text-green-400 text-sm mt-1">+12 este mes</span>
                </div>
                <div className="stat-card">
                    <span className="text-gray-400 text-sm">Jugadores profesionales</span>
                    <span className="text-3xl font-bold text-white mt-2">640</span>
                    <span className="text-green-400 text-sm mt-1">+24 este mes</span>
                </div>
                <div className="stat-card">
                    <span className="text-gray-400 text-sm">Partidas analizadas</span>
                    <span className="text-3xl font-bold text-white mt-2">2,458</span>
                    <span className="text-green-400 text-sm mt-1">+350 este mes</span>
                </div>
            </div>

            {/* Gráficas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <PerformanceChart />
                <PlayerComparison />
            </div>

            {/* Tablas de datos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card">
                    <h3 className="text-lg font-bold mb-4 gaming-text text-accent">Top Jugadores</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                            <tr className="border-b border-gray-700">
                                <th className="py-3 text-left">Jugador</th>
                                <th className="py-3 text-left">Equipo</th>
                                <th className="py-3 text-right">KDA</th>
                                <th className="py-3 text-right">Win %</th>
                            </tr>
                            </thead>
                            <tbody>
                            {topPlayerStats.map(player => (
                                <tr key={player.id} className="border-b border-gray-800 hover:bg-gray-800/30">
                                    <td className="py-3 text-left font-medium">{player.name}</td>
                                    <td className="py-3 text-left text-gray-300">{player.team}</td>
                                    <td className="py-3 text-right font-medium text-primary">{player.kda}</td>
                                    <td className="py-3 text-right">{player.winRate}%</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card">
                    <h3 className="text-lg font-bold mb-4 gaming-text text-accent">Próximos Partidos</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                            <tr className="border-b border-gray-700">
                                <th className="py-3 text-left">Equipos</th>
                                <th className="py-3 text-left">Liga</th>
                                <th className="py-3 text-right">Fecha</th>
                            </tr>
                            </thead>
                            <tbody>
                            {upcomingMatches.map(match => (
                                <tr key={match.id} className="border-b border-gray-800 hover:bg-gray-800/30">
                                    <td className="py-3 text-left font-medium">{match.teams}</td>
                                    <td className="py-3 text-left">
                      <span className="px-2 py-1 rounded bg-primary/20 text-primary text-xs">
                        {match.league}
                      </span>
                                    </td>
                                    <td className="py-3 text-right text-gray-300">{match.date}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
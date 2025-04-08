import React, { useState } from 'react';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';
import PlayerComparison from '../components/Dashboard/PlayerComparison';
import HeatmapAnalysis from '../components/Dashboard/HeatmapAnalysis';
import AdvancedPlayerStats from '../components/Dashboard/AdvancedPlayerStats';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data
const goldDifferenceData = [
    { minute: 1, goldDiff: 50 },
    { minute: 5, goldDiff: 150 },
    { minute: 10, goldDiff: -300 },
    { minute: 15, goldDiff: -800 },
    { minute: 20, goldDiff: 500 },
    { minute: 25, goldDiff: 2500 },
    { minute: 30, goldDiff: 4000 },
    { minute: 35, goldDiff: 6000 }
];

const topPlayerStats = [
    { id: 1, name: 'Faker', team: 'T1', kda: '7.2', winRate: 72 },
    { id: 2, name: 'Caps', team: 'G2', kda: '6.8', winRate: 65 },
    { id: 3, name: 'ShowMaker', team: 'DK', kda: '7.0', winRate: 69 }
];

const upcomingMatches = [
    { id: 1, teams: 'T1 vs DK', league: 'LCK Spring', date: 'April 10' },
    { id: 2, teams: 'G2 vs FNC', league: 'LEC Spring', date: 'April 11' }
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-gaming-dark p-3 border border-gray-700 rounded shadow-lg">
                <p className="text-white"><span className="font-medium">Minute:</span> {data.minute}</p>
                <p className={data.goldDiff >= 0 ? "text-green-400" : "text-red-400"}>
                    <span className="font-medium">Gold Diff:</span> {data.goldDiff >= 0 ? '+' : ''}{data.goldDiff}
                </p>
            </div>
        );
    }
    return null;
};

const PerformanceChart = () => (
    <div className="bg-gaming-panel p-4 rounded shadow">
        <h3 className="text-lg font-bold text-white mb-4">Gold Difference Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={goldDifferenceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="minute" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line type="monotone" dataKey="goldDiff" stroke="#00e676" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    </div>
);

const Dashboard = () => {
    const [selectedGame, setSelectedGame] = useState('lol');

    return (
        <div className="container mx-auto px-4 py-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-gaming font-bold text-white">
                        Pro Analytics <span className="text-gaming-accent">Dashboard</span>
                    </h1>
                    <p className="text-gray-400 mt-1">Comprehensive esports performance metrics and insights</p>
                </div>

                <div className="flex space-x-3 mt-4 md:mt-0">
                    {['lol', 'valorant', 'csgo'].map(game => (
                        <Button
                            key={game}
                            variant={selectedGame === game ? 'primary' : 'ghost'}
                            onClick={() => setSelectedGame(game)}
                        >
                            {game.toUpperCase()}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="bg-gradient-to-br from-gaming-dark to-gaming-panel border-l-4 border-gaming-accent">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 text-sm">Tournament Prize Pools</p>
                            <h3 className="text-2xl font-bold mt-1">$4.2M</h3>
                            <p className="text-green-400 text-xs mt-1">+12% from last year</p>
                        </div>
                        <div className="bg-gaming-accent/20 p-2 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gaming-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </Card>

                <Card className="bg-gradient-to-br from-gaming-dark to-gaming-panel border-l-4 border-cyan-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 text-sm">Average Viewership</p>
                            <h3 className="text-2xl font-bold mt-1">1.8M</h3>
                            <p className="text-green-400 text-xs mt-1">+23% from last tournament</p>
                        </div>
                        <div className="bg-cyan-500/20 p-2 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                    </div>
                </Card>

                <Card className="bg-gradient-to-br from-gaming-dark to-gaming-panel border-l-4 border-neon-400">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 text-sm">Active Pro Teams</p>
                            <h3 className="text-2xl font-bold mt-1">128</h3>
                            <p className="text-green-400 text-xs mt-1">+8 new teams this season</p>
                        </div>
                        <div className="bg-neon-400/20 p-2 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                    </div>
                </Card>

                {/* Gráficas */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <PerformanceChart />
                    <PlayerComparison />
                </div>

                {/* Tablas */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Top Players */}
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
                                        <td className="py-3">{player.name}</td>
                                        <td className="py-3">{player.team}</td>
                                        <td className="py-3 text-right">{player.kda}</td>
                                        <td className="py-3 text-right">{player.winRate}%</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Próximos Partidos */}
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
                                        <td className="py-3">{match.teams}</td>
                                        <td className="py-3">{match.league}</td>
                                        <td className="py-3 text-right">{match.date}</td>
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
import React, { useState } from 'react';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';
import AdvancedPlayerStats from '../components/Dashboard/AdvancedPlayerStats';
import PerformanceChart from '../components/Dashboard/PerformanceChart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Datos simulados
const playerHistory = [
    { season: 'Spring 2023', winRate: 62, kda: 4.2, dpm: 580 },
    { season: 'Summer 2023', winRate: 58, kda: 3.8, dpm: 610 },
    { season: 'Worlds 2023', winRate: 65, kda: 4.7, dpm: 640 },
    { season: 'Spring 2024', winRate: 70, kda: 5.2, dpm: 650 },
    { season: 'Summer 2024', winRate: 72, kda: 5.8, dpm: 680 },
];

const playerRoles = [
    { id: 1, name: 'Faker', role: 'Mid', team: 'T1', image: '/api/placeholder/100/100' },
    { id: 2, name: 'ShowMaker', role: 'Mid', team: 'DK', image: '/api/placeholder/100/100' },
    { id: 3, name: 'Chovy', role: 'Mid', team: 'GEN', image: '/api/placeholder/100/100' },
    { id: 4, name: 'Caps', role: 'Mid', team: 'G2', image: '/api/placeholder/100/100' },
    { id: 5, name: 'Knight', role: 'Mid', team: 'TES', image: '/api/placeholder/100/100' },
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gaming-dark p-3 border border-gray-700 rounded shadow-lg">
                <p className="text-white font-medium">{payload[0].payload.season}</p>
                <p className="text-sm text-blue-400">Win Rate: {payload[0].value}%</p>
                <p className="text-sm text-green-400">KDA: {payload[1].value}</p>
                <p className="text-sm text-red-400">DPM: {payload[2].value}</p>
            </div>
        );
    }
    return null;
};

const PlayerAnalysis = () => {
    const [selectedPlayer, setSelectedPlayer] = useState(1);
    const [selectedTab, setSelectedTab] = useState('overview');

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
                <div>
                    <h1 className="text-3xl font-gaming font-bold text-white">
                        Player <span className="text-gaming-accent">Analysis</span>
                    </h1>
                    <p className="text-gray-400 mt-1">In-depth statistics and performance metrics for pro players</p>
                </div>

                <div className="mt-4 lg:mt-0 flex overflow-x-auto pb-2 space-x-2">
                    {playerRoles.map(player => (
                        <button
                            key={player.id}
                            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                                selectedPlayer === player.id
                                    ? 'bg-gaming-accent text-white'
                                    : 'bg-gaming-panel hover:bg-gaming-panel/80 text-gray-300'
                            }`}
                            onClick={() => setSelectedPlayer(player.id)}
                        >
                            <div className="w-8 h-8 rounded-full bg-gray-800 overflow-hidden flex-shrink-0">
                                <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="text-left">
                                <div className="font-medium text-sm">{player.name}</div>
                                <div className="text-xs opacity-80">{player.team}</div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-800 mb-6">
                <button
                    className={`px-4 py-2 font-medium text-sm ${
                        selectedTab === 'overview'
                            ? 'text-gaming-accent border-b-2 border-gaming-accent'
                            : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={() => setSelectedTab('overview')}
                >
                    Overview
                </button>
                <button
                    className={`px-4 py-2 font-medium text-sm ${
                        selectedTab === 'champions'
                            ? 'text-gaming-accent border-b-2 border-gaming-accent'
                            : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={() => setSelectedTab('champions')}
                >
                    Champion Pool
                </button>
                <button
                    className={`px-4 py-2 font-medium text-sm ${
                        selectedTab === 'history'
                            ? 'text-gaming-accent border-b-2 border-gaming-accent'
                            : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={() => setSelectedTab('history')}
                >
                    Career History
                </button>
                <button
                    className={`px-4 py-2 font-medium text-sm ${
                        selectedTab === 'heatmaps'
                            ? 'text-gaming-accent border-b-2 border-gaming-accent'
                            : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={() => setSelectedTab('heatmaps')}
                >
                    Positioning & Heatmaps
                </button>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Player Info */}
                <div className="lg:col-span-1">
                    <Card>
                        <div className="flex items-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gaming-accent to-gaming-highlight flex items-center justify-center">
                                <img
                                    src="/api/placeholder/100/100"
                                    alt="Faker"
                                    className="w-14 h-14 rounded-full"
                                />
                            </div>
                            <div className="ml-4">
                                <h2 className="font-gaming text-xl font-bold">Faker</h2>
                                <p className="text-gray-400 text-sm">Lee Sang-hyeok • T1</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-xs px-2 py-0.5 bg-gaming-accent/20 text-gaming-accent rounded">
                                        Mid Laner
                                    </span>
                                    <span className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded ml-2">
                                        Korea
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-6">
                            <div className="bg-gaming-dark/50 p-3 rounded text-center">
                                <div className="text-2xl font-bold text-gaming-accent">72%</div>
                                <div className="text-xs text-gray-400">Win Rate</div>
                            </div>
                            <div className="bg-gaming-dark/50 p-3 rounded text-center">
                                <div className="text-2xl font-bold text-gaming-accent">5.8</div>
                                <div className="text-xs text-gray-400">KDA</div>
                            </div>
                            <div className="bg-gaming-dark/50 p-3 rounded text-center">
                                <div className="text-2xl font-bold text-gaming-accent">680</div>
                                <div className="text-xs text-gray-400">DPM</div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="font-medium text-white">Career Highlights</h3>
                            <ul className="mt-2 space-y-2">
                                <li className="flex items-center text-sm">
                                    <span className="w-2 h-2 bg-gaming-accent rounded-full mr-2"></span>
                                    3x World Champion (2013, 2015, 2016)
                                </li>
                                <li className="flex items-center text-sm">
                                    <span className="w-2 h-2 bg-gaming-accent rounded-full mr-2"></span>
                                    10x LCK Champion
                                </li>
                                <li className="flex items-center text-sm">
                                    <span className="w-2 h-2 bg-gaming-accent rounded-full mr-2"></span>
                                    2x MSI Champion
                                </li>
                                <li className="flex items-center text-sm">
                                    <span className="w-2 h-2 bg-gaming-accent rounded-full mr-2"></span>
                                    Most decorated player in LoL history
                                </li>
                            </ul>
                        </div>

                        <div className="mt-6 p-4 bg-gaming-dark/30 rounded border border-gray-800">
                            <h3 className="font-medium text-white mb-2">Signature Champions</h3>
                            <div className="flex flex-wrap gap-2">
                                <div className="flex items-center bg-gaming-dark p-1 pl-1 pr-3 rounded">
                                    <div className="w-8 h-8 rounded-full bg-gray-800 mr-2"></div>
                                    <span className="text-sm">LeBlanc</span>
                                </div>
                                <div className="flex items-center bg-gaming-dark p-1 pl-1 pr-3 rounded">
                                    <div className="w-8 h-8 rounded-full bg-gray-800 mr-2"></div>
                                    <span className="text-sm">Azir</span>
                                </div>
                                <div className="flex items-center bg-gaming-dark p-1 pl-1 pr-3 rounded">
                                    <div className="w-8 h-8 rounded-full bg-gray-800 mr-2"></div>
                                    <span className="text-sm">Orianna</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Right Column - Stats and Charts */}
                <div className="lg:col-span-2 space-y-6">
                    <AdvancedPlayerStats playerId={selectedPlayer} />

                    <Card title="Career Performance Trends" subtitle="Stats evolution across seasons">
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={playerHistory} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                    <XAxis dataKey="season" stroke="#666" />
                                    <YAxis stroke="#666" />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Line type="monotone" dataKey="winRate" stroke="#7B2FFF" strokeWidth={2} dot={{ r: 5 }} />
                                    <Line type="monotone" dataKey="kda" stroke="#10b981" strokeWidth={2} dot={{ r: 5 }} />
                                    <Line type="monotone" dataKey="dpm" stroke="#f59e0b" strokeWidth={2} dot={{ r: 5 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>

                    <PerformanceChart title="Recent Performance" period="weekly" />
                </div>
            </div>
        </div>
    );
};

export default PlayerAnalysis;
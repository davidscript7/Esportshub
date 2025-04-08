import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../Common/Card';
import Button from '../Common/Button';

const AdvancedPlayerStats = ({ playerId }) => {
    const [timeRange, setTimeRange] = useState('season');
    const [statType, setStatType] = useState('performance');

    // Mock data - En producción vendría de una API
    const playerData = {
        name: "Faker",
        team: "T1",
        role: "Mid Laner",
        profileImg: "/api/placeholder/100/100", // Sería reemplazado por una imagen real
        seasonStats: {
            performance: [
                { name: 'KDA', value: 5.8, avg: 3.2 },
                { name: 'CS/min', value: 9.2, avg: 7.6 },
                { name: 'DMG%', value: 28.4, avg: 24.1 },
                { name: 'Gold%', value: 25.1, avg: 23.3 },
                { name: 'Vision', value: 1.2, avg: 0.7 }
            ],
            champions: [
                { name: 'Azir', games: 12, winRate: 75, kda: 6.2 },
                { name: 'Orianna', games: 10, winRate: 70, kda: 5.9 },
                { name: 'Syndra', games: 8, winRate: 62.5, kda: 4.8 },
                { name: 'Ryze', games: 7, winRate: 71.4, kda: 5.4 },
                { name: 'Leblanc', games: 6, winRate: 83.3, kda: 7.1 }
            ]
        },
        recentStats: {
            performance: [
                { name: 'KDA', value: 6.3, avg: 3.2 },
                { name: 'CS/min', value: 9.5, avg: 7.6 },
                { name: 'DMG%', value: 30.1, avg: 24.1 },
                { name: 'Gold%', value: 26.3, avg: 23.3 },
                { name: 'Vision', value: 1.4, avg: 0.7 }
            ],
            champions: [
                { name: 'Azir', games: 3, winRate: 100, kda: 8.5 },
                { name: 'Syndra', games: 2, winRate: 50, kda: 4.2 },
                { name: 'Akali', games: 2, winRate: 100, kda: 7.8 }
            ]
        }
    };

    const currentData = timeRange === 'season' ? playerData.seasonStats : playerData.recentStats;
    const statsData = currentData[statType];

    // Formateador personalizado para las herramientas de información
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-gaming-dark p-3 border border-gray-700 rounded shadow-lg">
                    <p className="font-gaming text-gaming-accent">{label}</p>
                    <p className="text-white text-sm">
                        Player: <span className="font-bold">{payload[0].value}</span>
                    </p>
                    <p className="text-gray-400 text-sm">
                        Avg: <span>{payload[1]?.value}</span>
                    </p>
                </div>
            );
        }
        return null;
    };

    // Renderiza la tabla de campeones
    const renderChampionsTable = () => (
        <div className="mt-4 overflow-x-auto">
            <table className="min-w-full">
                <thead>
                <tr className="border-b border-gray-700">
                    <th className="py-2 text-left">Champion</th>
                    <th className="py-2 text-center">Games</th>
                    <th className="py-2 text-center">Win Rate</th>
                    <th className="py-2 text-right">KDA</th>
                </tr>
                </thead>
                <tbody>
                {statsData.map((champion, idx) => (
                    <tr key={idx} className="border-b border-gray-800 hover:bg-gaming-dark/50">
                        <td className="py-3 text-left font-medium flex items-center">
                            <div className="w-8 h-8 bg-gaming-dark rounded-full mr-2 flex items-center justify-center text-xs">
                                {champion.name.charAt(0)}
                            </div>
                            {champion.name}
                        </td>
                        <td className="py-3 text-center">{champion.games}</td>
                        <td className="py-3 text-center">
                            <div className="flex items-center justify-center">
                                <div className="w-16 bg-gray-700 h-1.5 rounded-full mr-2">
                                    <div
                                        className="h-full rounded-full bg-gaming-accent"
                                        style={{width: `${champion.winRate}%`}}
                                    />
                                </div>
                                <span>{champion.winRate}%</span>
                            </div>
                        </td>
                        <td className="py-3 text-right font-medium text-gaming-accent">{champion.kda}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );

    // Renderiza el gráfico de rendimiento
    const renderPerformanceChart = () => (
        <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={statsData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                >
                    <XAxis dataKey="name" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar name="Player" dataKey="value" fill="#7B2FFF" radius={[4, 4, 0, 0]} />
                    <Bar name="Avg Pro" dataKey="avg" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );

    return (
        <Card
            title="Advanced Player Statistics"
            subtitle={`${playerData.name} (${playerData.role}) - ${playerData.team}`}
            className="h-full"
            headerAction={
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gaming-accent flex items-center justify-center">
                        <img
                            src="/api/placeholder/40/40"
                            alt={playerData.name}
                            className="rounded-full"
                        />
                    </div>
                </div>
            }
        >
            <div className="flex flex-wrap gap-2 mb-4">
                <Button
                    variant={timeRange === 'season' ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => setTimeRange('season')}
                >
                    Season
                </Button>
                <Button
                    variant={timeRange === 'recent' ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => setTimeRange('recent')}
                >
                    Last 10 Games
                </Button>
                <div className="ml-auto">
                    <Button
                        variant={statType === 'performance' ? 'primary' : 'ghost'}
                        size="sm"
                        onClick={() => setStatType('performance')}
                    >
                        Performance
                    </Button>
                    <Button
                        variant={statType === 'champions' ? 'primary' : 'ghost'}
                        size="sm"
                        onClick={() => setStatType('champions')}
                    >
                        Champions
                    </Button>
                </div>
            </div>

            {statType === 'performance' ? renderPerformanceChart() : renderChampionsTable()}

            <div className="mt-6 flex items-center justify-between p-3 bg-gaming-dark/50 rounded-lg border border-gray-700">
                <div>
                    <span className="text-xs text-gray-400">Career Highlights</span>
                    <div className="text-sm mt-1">
                        <span className="text-gaming-accent">3x</span> World Champion | <span className="text-gaming-accent">9x</span> LCK Champion
                    </div>
                </div>
                <Button variant="outline" size="sm">
                    Full Profile
                </Button>
            </div>
        </Card>
    );
};

export default AdvancedPlayerStats;
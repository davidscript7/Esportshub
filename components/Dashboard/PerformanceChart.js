import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../Common/Card';

const PerformanceChart = ({ title = "Player Performance Trends", period = "weekly" }) => {
    // Datos de ejemplo - en producción vendrían de una API
    const performanceData = {
        weekly: [
            { date: 'Week 1', kda: 3.2, damage: 24000, cs: 220 },
            { date: 'Week 2', kda: 4.5, damage: 26500, cs: 245 },
            { date: 'Week 3', kda: 3.8, damage: 25300, cs: 235 },
            { date: 'Week 4', kda: 5.1, damage: 28700, cs: 255 },
            { date: 'Week 5', kda: 4.7, damage: 27800, cs: 250 },
        ],
        monthly: [
            { date: 'Jan', kda: 3.5, damage: 23000, cs: 230 },
            { date: 'Feb', kda: 4.2, damage: 25000, cs: 240 },
            { date: 'Mar', kda: 4.5, damage: 27000, cs: 250 },
            { date: 'Apr', kda: 4.8, damage: 28000, cs: 255 },
        ]
    };

    const data = performanceData[period];

    // Tooltip personalizado
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-gaming-dark p-3 border border-gray-700 rounded shadow-lg">
                    <p className="font-gaming text-white">{label}</p>
                    {payload.map((entry, index) => (
                        <p key={index} style={{ color: entry.color }} className="text-sm">
                            {entry.name}: {entry.value}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <Card title={title} subtitle={`Performance metrics over ${period} periods`}>
            <div className="mt-4 h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey="date" stroke="#666" />
                        <YAxis stroke="#666" />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="kda"
                            name="KDA"
                            stroke="#7B2FFF"
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="damage"
                            name="Damage"
                            stroke="#10b981"
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="cs"
                            name="CS"
                            stroke="#f59e0b"
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default PerformanceChart;
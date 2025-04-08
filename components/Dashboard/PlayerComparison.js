import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts';

const PlayerComparison = ({ data }) => {
    // Datos de ejemplo para mostrar comparación de jugadores
    const demoData = [
        { stat: 'KDA', player1: 4.2, player2: 3.8 },
        { stat: 'CS/min', player1: 8.7, player2: 9.1 },
        { stat: 'Vision', player1: 7.5, player2: 6.2 },
        { stat: 'DPM', player1: 8.2, player2: 9.5 },
        { stat: 'Surviv.', player1: 6.8, player2: 5.4 },
        { stat: 'Obj. Control', player1: 7.9, player2: 8.3 },
    ];

    const chartData = data || demoData;

    return (
        <div className="chart-container h-80">
            <h3 className="text-lg font-bold mb-4 gaming-text text-accent">Comparación de Jugadores</h3>
            <ResponsiveContainer width="100%" height="85%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                    <PolarGrid stroke="#444" />
                    <PolarAngleAxis dataKey="stat" stroke="#ddd" />
                    <PolarRadiusAxis angle={30} domain={[0, 10]} stroke="#666" />
                    <Radar name="Jugador 1" dataKey="player1" stroke="#6d28d9" fill="#6d28d9" fillOpacity={0.3} />
                    <Radar name="Jugador 2" dataKey="player2" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PlayerComparison;
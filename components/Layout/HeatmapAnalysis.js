import React, { useState } from 'react';
import Card from '../Common/Card';

const HeatmapAnalysis = () => {
    const [selectedMap, setSelectedMap] = useState('summoners-rift');
    const [selectedPlayer, setSelectedPlayer] = useState('all');

    // Simulación de datos de posicionamiento - en producción esto vendría de la API
    const heatmapData = {
        'summoners-rift': {
            all: [
                { x: 25, y: 30, weight: 80 }, // Concentración alta en mid lane
                { x: 15, y: 80, weight: 60 }, // Bot lane
                { x: 80, y: 15, weight: 45 }, // Top lane
                { x: 40, y: 60, weight: 50 }, // Dragon pit
                // Muchos más puntos estarían aquí
            ],
            'player1': [
                { x: 25, y: 30, weight: 90 }, // Jugador 1 se queda en mid
                { x: 35, y: 45, weight: 40 },
                // Más puntos
            ],
            // Más jugadores
        },
        'valorant-haven': {
            // Datos similares para Valorant
        }
    };

    // Renderizado del heatmap (simplificado)
    const renderHeatmap = () => {
        const mapData = heatmapData[selectedMap][selectedPlayer] || [];

        return (
            <div className="relative w-full h-64 bg-gaming-dark rounded-lg overflow-hidden">
                {/* Imagen de fondo del mapa - sería reemplazada por una imagen real */}
                <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-gray-900 to-gray-800"></div>

                {/* Puntos del heatmap */}
                {mapData.map((point, index) => (
                    <div
                        key={index}
                        className="absolute rounded-full bg-gaming-accent/30 animate-pulse-slow"
                        style={{
                            left: `${point.x}%`,
                            top: `${point.y}%`,
                            width: `${Math.max(point.weight / 5, 10)}px`,
                            height: `${Math.max(point.weight / 5, 10)}px`,
                            opacity: point.weight / 100,
                            boxShadow: `0 0 ${point.weight / 5}px ${point.weight / 10}px rgba(123, 47, 255, 0.6)`
                        }}
                    />
                ))}

                {/* En un escenario real, usarías una librería como react-leaflet o d3.js para un heatmap avanzado */}
            </div>
        );
    };

    return (
        <Card
            title="Position Heatmap Analysis"
            subtitle="Track player movement and identify patterns"
        >
            <div className="mb-4 flex space-x-4">
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Game Map</label>
                    <select
                        className="bg-gaming-dark border border-gray-700 rounded px-3 py-2 text-sm w-full"
                        value={selectedMap}
                        onChange={(e) => setSelectedMap(e.target.value)}
                    >
                        <option value="summoners-rift">Summoner's Rift (LoL)</option>
                        <option value="valorant-haven">Haven (Valorant)</option>
                        <option value="dust2">Dust II (CS:GO)</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Player Filter</label>
                    <select
                        className="bg-gaming-dark border border-gray-700 rounded px-3 py-2 text-sm w-full"
                        value={selectedPlayer}
                        onChange={(e) => setSelectedPlayer(e.target.value)}
                    >
                        <option value="all">All Players</option>
                        <option value="player1">Faker</option>
                        <option value="player2">ShowMaker</option>
                        <option value="player3">Caps</option>
                    </select>
                </div>
            </div>

            {renderHeatmap()}

            <div className="mt-4 bg-gaming-dark p-3 rounded-lg">
                <h4 className="text-sm font-semibold text-gaming-accent mb-2">Analysis Insights</h4>
                <p className="text-sm text-gray-300">
                    The heatmap shows high mid lane presence (80%) with regular rotations to dragon pit.
                    Early game focus on bot side control suggests prioritization of dragon objectives.
                </p>
            </div>
        </Card>
    );
};

export default HeatmapAnalysis;
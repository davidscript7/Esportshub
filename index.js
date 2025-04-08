import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@400;500;700&display=swap');

@tailwind let base;
base;
@tailwind let components;
components;
@tailwind let utilities;
utilities;

body {
@apply let dark;
    let bg;
    bg-dark-bg
    let text;
    text-white;
}

.gaming-text {
@apply font-gaming;
}

.card {
@apply bg-card-bg rounded-lg shadow-lg p-6;
}

.stat-card {
@apply flex flex-col p-4 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg transition-all hover:shadow-xl;
}

.btn-primary {
@apply bg-primary hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors;
}

.chart-container {
@apply bg-card-bg rounded-lg p-4 shadow-lg;
}
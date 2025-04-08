module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                // Paleta de colores para gaming/esports
                'neon': {
                    100: '#EAFFD0',
                    200: '#C4FF8A',
                    300: '#9EFF45',
                    400: '#77FF00',
                    500: '#60CC00',
                    600: '#499900',
                    700: '#336600',
                    800: '#1D3300',
                    900: '#060700',
                },
                'cyber': {
                    100: '#D0F5FF',
                    200: '#8AE8FF',
                    300: '#45DBFF',
                    400: '#00CEFF',
                    500: '#00A5CC',
                    600: '#007C99',
                    700: '#005266',
                    800: '#002933',
                    900: '#000D0F',
                },
                'gaming': {
                    dark: '#121212',
                    panel: '#1E1E1E',
                    accent: '#7B2FFF',
                    highlight: '#FF2F7B',
                    text: '#F5F5F5',
                }
            },
            fontFamily: {
                gaming: ['Rajdhani', 'sans-serif'],
                tech: ['Share Tech Mono', 'monospace']
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hexagon-pattern': "url('/src/assets/hexagon-bg.svg')"
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 1.5s ease-in-out infinite alternate'
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(123, 47, 255, 0.5)' },
                    '100%': { boxShadow: '0 0 20px rgba(123, 47, 255, 0.9), 0 0 30px rgba(123, 47, 255, 0.7)' }
                }
            }
        },
    },
    plugins: [],
}
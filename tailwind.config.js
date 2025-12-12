/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#a163d7ff', // Indigo 700
                    light: '#6366f1',   // Indigo 500
                    dark: '#312e81',    // Indigo 900
                },
                secondary: {
                    DEFAULT: '#8b5cf6', // Violet 500
                    light: '#a78bfa',   // Violet 400
                },
                accent: {
                    DEFAULT: '#f43f5e', // Rose 500
                    hover: '#e11d48',   // Rose 600
                },
                background: '#f8fafc', // Slate 50
                surface: '#ffffff',
                text: {
                    primary: '#341e3bff',   // Slate 800
                    secondary: '#64748b', // Slate 500
                    light: '#94a3b8',     // Slate 400
                },
                border: '#e2e8f0',      // Slate 200
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            borderRadius: {
                'lg': '0.75rem',
                'xl': '1rem',
            },
            boxShadow: {
                'soft': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                'strong': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            }
        },
    },
    plugins: [],
}

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
                // Vietnamese-optimized font stack
                sans: [
                    'Roboto',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Helvetica',
                    'Arial',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"'
                ],
                // For headings - Vietnamese optimized
                'heading': [
                    'Playfair Display',
                    'Georgia',
                    'serif'
                ],
                // Monospace for code
                'mono': [
                    '"Courier New"',
                    'Courier',
                    'monospace'
                ],
                // Vietnamese body text
                'vietnamese': [
                    'Roboto',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'sans-serif'
                ],
            },
            fontSize: {
                // Vietnamese-friendly font sizes
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.5rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }],
            },
            lineHeight: {
                // Vietnamese text line heights
                'tight': '1.2',
                'snug': '1.3',
                'normal': '1.5',
                'relaxed': '1.625',
                'loose': '2',
                'vietnamese': '1.7',
                'vietnamese-tight': '1.3',
                'vietnamese-relaxed': '1.9',
            },
            letterSpacing: {
                // Vietnamese letter spacing
                'tighter': '-0.05em',
                'tight': '-0.025em',
                'normal': '0em',
                'wide': '0.025em',
                'wider': '0.05em',
                'widest': '0.1em',
                'vietnamese': '0.3px',
                'vietnamese-title': '-0.01em',
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

import type { Config } from 'tailwindcss';

export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                cream: '#F7F4EF',
                sand: {
                    DEFAULT: '#D6BB9E',
                    soft: '#EFE6D8',
                    dark: '#B98A5E',
                    darker: '#8F6A45',
                },
                sage: {
                    DEFAULT: '#9AA896',
                    soft: '#DEE2D8',
                    dark: '#586B54',
                    darker: '#3F4D3B',
                },
                flame: { DEFAULT: '#E8581F', soft: '#FBE2D6', dark: '#C2410C' },
                ink: { DEFAULT: '#1C1A17', muted: '#5C5349' },
            },
        },
    },
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // HOTBOX Social Official Color Palette - Updated to match actual brand colors
        'earth-green': '#1A2E1F',    // Deeper, richer forest green
        'nude': '#D4C4A8',           // Warmer, more golden beige
        'burnt-orange': '#D45D19',   // Richer, warmer orange
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
        heading: ['Larken', 'serif'],
      },
      animation: {
        'steam-rise': 'steam-rise 3s ease-out infinite',
        'water-splash': 'water-splash 2s ease-out infinite',
      },
      keyframes: {
        'steam-rise': {
          '0%': { transform: 'translateY(100%) scale(0.8)', opacity: '0' },
          '50%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-100%) scale(1.2)', opacity: '0' },
        },
        'water-splash': {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: '1' },
          '50%': { transform: 'scale(1.2) rotate(180deg)', opacity: '0.8' },
          '100%': { transform: 'scale(2) rotate(360deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

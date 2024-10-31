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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'fade-in-scale': 'fadeInScale 1.5s ease-in-out forwards',
        'slide-down': 'slideDown 2.5s ease-out forwards',
        'slide-in': 'slideIn 1s ease-out forwards',  
        'progress': 'progress 4s ease-in-out forwards',        
        'blink': 'blink 1.5s infinite',
      },
      keyframes: {
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideIn: {  
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        progress: {  
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: { 
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'paper-texture': "url('/paper-texture.png')", // Ändra sökvägen vid behov
      },
    },
  },
  plugins: [],
};

export default config;

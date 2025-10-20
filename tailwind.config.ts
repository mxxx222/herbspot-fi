import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // New wellness color palette
        primary: "#52796F", // sage green
        accent: "#CAD2C5",   // light sage
        neutral: "#2F3E46",  // dark blue-gray
        background: "#F7F7F2", // warm white
        
        // Legacy brand colors (keeping for compatibility)
        brand: "#39FF14",
        ink: "#0A0A0A",
      },
      fontFamily: {
        // New typography system
        heading: ["Cormorant Garamond", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui"],
        
        // Legacy font
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      fontWeight: {
        'heading': '600',
        'body': '400',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        bounceGentle: {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.05)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

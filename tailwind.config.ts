import type { Config } from "tailwindcss";

export default {
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DC2626',
          light: '#EF4444',
          dark: '#991B1B',
        },
        accent: {
          DEFAULT: '#991B1B',
          light: '#B91C1C',
          dark: '#7F1D1D',
        },
        neutral: {
          DEFAULT: '#F8FAFC',
          dark: '#1E293B',
          darker: '#0F172A',
        },
        text: {
          DEFAULT: '#0F172A',
          light: '#64748B',
          dark: '#F8FAFC',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1E293B',
        },
        success: {
          DEFAULT: '#10B981',
          light: '#A7F3D0',
          dark: '#047857',
        }
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0,0,0,0.05)',
        'hover': '0 4px 6px -1px rgba(220, 38, 38, 0.1), 0 2px 4px -1px rgba(220, 38, 38, 0.06)',
      }
    },
  },
  plugins: [],
} satisfies Config;

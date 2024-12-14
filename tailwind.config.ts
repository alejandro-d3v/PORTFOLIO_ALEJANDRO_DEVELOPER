import type { Config } from "tailwindcss";

export default {
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
        primary: {
          100: '#F2A58C',
          200: '#F08862',
          300: '#F06239',
          400: '#F03C10',
          500: '#EA6128',  // primary color
          600: '#D14F1E',
          700: '#B43F16',
          800: '#9D2F0E',
          900: '#861F06',
        },
        secondary: {
          100: '#595959',
          200: '#474747',
          300: '#363636',
          400: '#2D2D2D',
          500: '#2c2c2c',  // secondary color
          600: '#242424',
          700: '#1C1C1C',
          800: '#141414',
          900: '#0C0C0C',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

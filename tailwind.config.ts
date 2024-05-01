import type { Config } from "tailwindcss";

const config: Config = {
  important : true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      'sm': '314px',
      // => @media (min-width: 344px) { ... }
      'md': '640px',
      // => @media (min-width: 640px) { ... }
      'lg': '890px',
      // => @media (min-width: 980px) { ... }
      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },    
    extend: {
      fontFamily: {
          Oxanium: [ 'Oxanium','ui-sans-serif', 'Arial'],
          Roboto: ['Roboto','ui-serif', 'Arial'],
      },
      rotate: {
        '320': '350deg',
      },
      backgroundImage: {
        'hero-pattern': "url('/marketListBg.svg')",
      }
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
};
export default config;

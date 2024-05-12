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
      '2sm': '414px',
      '3sm': '444px',
      'md': '640px',
      // => @media (min-width: 640px) { ... }
      'lg': '900px',
      // => @media (min-width: 980px) { ... }
      '3lg': '1006px',
      'xlg': '960px',
      // => @media (min-width: 980px) { ... }
      '2lg': '1099px',
      // => @media (min-width: 1440px) { ... }
      'xl': '1180px',
      'txl': '1324px',
      // => @media (min-width: 1440px) { ... }
      '2xl': '1480px',
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
  ],
};
export default config;

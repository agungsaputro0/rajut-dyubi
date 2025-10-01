import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'screen-default': 'calc(100vh - 4rem)',
        'screen-half': 'calc(60vh - 4rem)',
      },
      colors: {
        rajutLitepink: "#fffefd",
        rajutLighterPink: "#ffd9e3ff",
        rajutPink: "#f03a6a",
        rajutBoldPink: "#c90b3e",
        rajutPeach: "#fdf5ef",
        rajutBoldPeach: "#fca0a0ff",
        rajutBolderPeach: "#fce2cdff",
        rajutGold: "#d4af37",
        rajutLiteGold: "#e8c986ff",
        rajutGray: "#2a2f37ff",
        background: "var(--background)",
        foreground: "var(--foreground)",
        kemenkeulightblue: "#005598",
        kemenkeubluesoft: "#e6f0ff",
        kemenkeublue: "#01347c",
        kemenkeudarkerblue: "#02275d",
        kemenkeuyellow: "#ffb300",
        kemenkeuyellowsoft: "#fff6cc",
        aqua: "#00FFFF",
        farmdarkestbrown: "#45210aff",
        farmdarkbrown: "#5a3828",
        farmbrown: "#724e3a",
        farmlightbrown: "#d4cea6ff",
        farmgreen: "#59a025",
        farmfreshgreen: "#7CFC00",
        farmgrassgreen: "#084724",
        grid_4: "repeat(4, minmax(0, 1fr))",
      },
      fontSize: {
        sideBarIcon: "1.2em",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dancingScript: ['DancingScript', 'sans-serif'],
      },
      animation: {
        wave: 'wave 1s infinite ease-in-out',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      backgroundImage: {
        gradientJourney: "linear-gradient(to bottom, #F8E5E5, #F5C2C7)", 
        gradientJourneyInNumber: "linear-gradient(to bottom, #FFFFFF, #F5C2C7)", 
      }
    },
  },
  plugins: [],
};
export default config;

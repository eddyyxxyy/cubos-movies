import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

type TColorScale = Record<string | number, string>;

function getColorScale(name: string): TColorScale {
  const scale: TColorScale = {};

  for (let i = 1; i <= 12; i++) {
    scale[i] = `var(--${name}-${i})`;
  }

  return scale;
}

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: getColorScale("purple"),
        gray: getColorScale("mauve"),
      },
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        roboto: ["var(--font-roboto)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;

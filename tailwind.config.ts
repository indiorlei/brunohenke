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
      },
      fontFamily: {
        "helvetica-now-display": ["var(--font-helvetica-now-display)"],
      },
      fontSize: {
        title: [
          "80px",
          {
            lineHeight: "100%",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;

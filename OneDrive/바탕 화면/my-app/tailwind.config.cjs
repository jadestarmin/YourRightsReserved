// tailwind.config.cjs
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,css}",
    "./src/components/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      // ← All of these map to the CSS vars shadcn/UI emits
      colors: {
        border:       "hsl(var(--border))",
        background:   "hsl(var(--background))",
        foreground:   "hsl(var(--foreground))",
        input:        "hsl(var(--input))",
        ring:         "hsl(var(--ring))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // Keep your font families, spacing, etc. here too…
      fontFamily: {
        sans:  ["var(--font-sans)",  ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [
    // Make sure you have the core plugin, not the v4 adapter:
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animate"),
  ],
};

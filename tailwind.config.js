/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* -----------------------------------------------------------------
           SANY palette — RED is the only colour. Everything else is the
           black↔white spectrum (neutral grey). The former `blue-*` scale is
           remapped to a neutral ink/graphite ramp so no blue renders; primary
           accents use `sany-red`.
        ------------------------------------------------------------------ */
        blue: {
          50:  '#f4f6f8',
          100: '#e8ebee',
          200: '#d4d9df',
          300: '#aeb6c0',
          400: '#7b8593',
          500: '#545e6b',
          600: '#252d37',
          700: '#1a2028',
          800: '#12171d',
          900: '#0b0f14',
          950: '#06080b',
        },
        "sany-red": "#E60012",
        "sany-red-hover": "#c20010",
        "sany-blue": "#252d37",
        "sany-blue-hover": "#12171d",
        "sany-blue-light": "#f4f6f8",
        "sany-ink": "#0b0f14",
        "sany-dark": "#0b0f14",
        "sany-slate": "#3a434f",
        "sany-muted": "#6b7480",
        "sany-border": "#E4E7EB",
        "sany-bg": "#FFFFFF",
        "sany-surface": "#FAFAFA",
      },
      fontFamily: {
        /* One typeface across the entire site: Manrope. */
        "sans": ["Manrope", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        "display": ["Manrope", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        "mono": ["Manrope", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        "serif": ["Manrope", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      letterSpacing: {
        "eyebrow": "0.18em",
      },
      boxShadow: {
        "premium": "0 24px 60px -24px rgba(11,15,20,0.28)",
        "soft": "0 1px 2px rgba(11,15,20,0.04), 0 8px 24px -12px rgba(11,15,20,0.10)",
      },
    },
  },
  plugins: [],
}

import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './context/**/*.{ts,tsx}',
    './services/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Archivo Black"', 'system-ui', 'sans-serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Theme-aware: these flip between light and dark in globals.css.
        paper: 'var(--paper)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',

        // Flat, saturated blocks. Identical in both themes on purpose —
        // brutalism keeps its accents loud rather than desaturating them.
        flame: '#FF4D00',
        acid: '#D6F24A',
        sky: '#4D9CFF',
        grape: '#7C5CFF',
        rose: '#FF5DA2',
        mint: '#00D49A',
      },
      borderRadius: {
        brutal: '6px',
      },
      transitionTimingFunction: {
        // Stepped, not eased — movement should snap rather than glide.
        brutal: 'steps(2, end)',
      },
      borderWidth: {
        3: '3px',
      },
      boxShadow: {
        // --shadow resolves to near-black in light, cream in dark, so one
        // utility works in both themes.
        brutal: '3px 3px 0 0 var(--shadow)',
        'brutal-md': '5px 5px 0 0 var(--shadow)',
        'brutal-lg': '8px 8px 0 0 var(--shadow)',
        'brutal-xl': '12px 12px 0 0 var(--shadow)',
        'brutal-inset': 'inset 3px 3px 0 0 var(--shadow)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        // Deliberately mechanical — no easing curves, no float.
        jitter: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-2px, 2px)' },
          '50%': { transform: 'translate(2px, -2px)' },
          '75%': { transform: 'translate(2px, 2px)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        jitter: 'jitter 0.3s steps(2) infinite',
        blink: 'blink 1s steps(1) infinite',
      },
    },
  },
  plugins: [animate],
};

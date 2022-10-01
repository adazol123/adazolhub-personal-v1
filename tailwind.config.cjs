/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,tsx}",
    "./src/components/**/*.{ts,tsx,js,tsx}",
    "./src/components/**/**/*.{ts,tsx,js,tsx}",
    "./src/components/**/**/**/*.{ts,tsx,js,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateZ(0)",
          },
          to: {
            transform: "translate3d(-100%,0,0)",
          },
        },
        marquee_reverse: {
          "0%": {
            transform: "translateZ(0)",
          },
          to: {
            transform: "translate3d(100%,0,0)",
          },
        },
      },
      animation: {
        marquee_loop: "marquee  60s linear infinite",
        maarquee_loop_reverse: "marquee_reverse 60s linear infinite",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
  important: true,
};

// animation: {
//   marquee: "marquee 90s linear infinite",
//   "marquee-reverse": "marquee-reverse 90s linear infinite",
// },

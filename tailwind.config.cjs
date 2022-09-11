/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,tsx}",
    "./src/components/**/*.{ts,tsx,js,tsx}",
    "./src/components/**/**/*.{ts,tsx,js,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": {
            left: "0",
          },
          "100%": {
            left: "-100%",
          },
        },
        marquee_reverse: {
          "0%": {
            right: "0",
          },
          "100%": {
            right: "-100%",
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
};

// animation: {
//   marquee: "marquee 90s linear infinite",
//   "marquee-reverse": "marquee-reverse 90s linear infinite",
// },

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chill: ['Poppins', 'sans-serif'],
        sixtyFour: ["Sixtyfour", 'sans-serif']
      },
      colors: {
        bgds: "#09090B",
        forHover: "#1A1A1A",
        brdr: "#232324",
        texts: "#858B96",
        spcl: "#5C626E"
      }
    },
    keyframes: {
      wiggle: {
        "0%":{
          borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%"
      },
      "50%":{
          borderRadius:"30% 60% 70% 40%/50% 60% 30% 60%"
      },
      "100%":{
          borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%"
      }
      }
    },
    animation: {
      wiggle: 'wiggle 8s ease-in-out infinite',
    }
  },
  plugins: [],
}
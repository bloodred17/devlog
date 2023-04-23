/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,ts,md}'],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#EA6A62',
          secondary: '#F9A592',
          accent: '#DA3D51',
          neutral: '#260B0E',
          "neutral-content": '#FCF9F7',
          "base-100": '#FCF9F7',
          "base-200": '#FCF6F2',
          "base-300": '#FCEEE6',
        }
      }
    ]
  }
};

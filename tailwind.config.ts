export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#C41E3A',
            dark: '#A01830',
            light: '#E84560',
          },
          accent: {
            gold: '#D4A017',
            dark: '#1A1A1A',
            gray: '#F5F5F5',
            border: '#E5E5E5',
          },
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
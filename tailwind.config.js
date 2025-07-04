module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Loomattic','serif'],
        body: ['Nunito', 'sans-serif'],
      },
      colors: {
        lightblue: '#34febc',
        darkblue: '#030d12',
        yellow: '#ffde00',
      },
    },
    letterSpacing: {
      extraWide: '0.5em',
      normalWide: '0.14em',
      spec: '0.09em',
      accurate: '0.05em',
    }
  },
  plugins: [],
}

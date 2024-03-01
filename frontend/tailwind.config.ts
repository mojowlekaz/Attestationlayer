import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        '000000E5': '#000000E5',
        '12F1E440': '#12F1E440',
        '0C8AFF40': '#0C8AFF40',
        '0DBE3440': '#0DBE3440',
        '093e3a': '#093e3a',
        '5D5E5E80': '#5D5E5E80',
        '12f1e4': '#12f1e4',
        '0C8AFF': '#0C8AFF',
      },
      colors: {
        FFFEFE: '#FFFEFE',
        '12F1E4': '#12F1E4',
      },
    },
  },
  plugins: [],
}
export default config

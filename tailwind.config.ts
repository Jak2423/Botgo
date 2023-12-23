import type { Config } from 'tailwindcss'

const config: Config = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         colors: {
            secondary: '#62bbf2',
            gray: {
               0: '#fff',
               100: '#fafafa',
               200: '#eaeaea',
               300: '#999999',
               400: '#888888',
               500: '#666666',
               600: '#444444',
               700: '#333333',
               800: '#222222',
               900: '#111111',
            },
         },
      },
   },
   plugins: [],
   darkMode: 'class'
}
export default config

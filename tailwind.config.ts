import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bubblegum: '#FF4FC5',
        cheddar: '#FFC14F',
        grape: '#5F4FFF',
        mountaindew: '#64FF4F',
        mud: '#807767',
        peacock: '#4F9CFF',
        orangejulius: '#FF934F',
        sand: '#BFA26B',
        smokey: '#776780',
        stormy: '#6D88AA'
      },
      fontFamily: {
        sans: ['var(--font-museo-moderno)', ...defaultTheme.fontFamily.sans],
        serif: [
          'var(--font-playfair-display)',
          ...defaultTheme.fontFamily.serif
        ]
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900'
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(-0px)' }
        },
        fadeInBottom: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' }
        }
      },
      animation: {
        fadeInLeft: 'fadeInLeft .4s ease-in',
        fadeInBottom: 'fadeInBottom .4s ease-in'
      }
    }
  },
  plugins: []
};
export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E2B33',
          soft: '#3A5A61'
        },
        paper: {
          DEFAULT: '#F6FAF9',
          warm: '#E4F2F0'
        },
        teal: {
          50: '#EAF6F5',
          100: '#CFEBE9',
          200: '#9FD7D3',
          300: '#6BC0BC',
          400: '#3AA6A2',
          500: '#1C8C99',
          600: '#146E7C',
          700: '#0F5560',
          800: '#0B3E47',
          900: '#082B32'
        },
        sun: {
          50: '#FFF7E0',
          200: '#FFE49E',
          400: '#FFC93C',
          500: '#F4B400',
          600: '#C99000'
        },
        bloom: {
          50: '#FDECF2',
          200: '#F5A9C5',
          400: '#E8407A',
          500: '#D42768',
          600: '#AC1D54'
        },
        leaf: {
          400: '#4FA36A',
          500: '#3B8654'
        }
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      borderRadius: {
        xl2: '1.25rem',
        blob: '42% 58% 65% 35% / 45% 45% 55% 55%',
        photo: '2.5rem 2.5rem 8rem 2.5rem'
      },
      boxShadow: {
        stamp: '0 0 0 1.5px rgba(14,43,51,0.18), 0 0 0 5px rgba(14,43,51,0.05)',
        card: '0 20px 45px -20px rgba(14,43,51,0.28)',
        pop: '0 10px 30px -12px rgba(212,39,104,0.45)',
        'pop-sun': '0 10px 28px -12px rgba(196,144,0,0.45)'
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")"
      },
      keyframes: {
        'stamp-in': {
          '0%': { transform: 'scale(2.2) rotate(-14deg)', opacity: '0' },
          '60%': { transform: 'scale(0.92) rotate(-6deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(-6deg)', opacity: '1' }
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'stamp-in': 'stamp-in 0.6s cubic-bezier(.2,.9,.3,1.2) both',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'marquee': 'marquee 34s linear infinite'
      }
    }
  },
  plugins: []
};

export default config;

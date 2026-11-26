/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        farm: {
          green: '#63A83E',
          'dark-green': '#438C38',
          'leaf-green': '#A8D957',
          gold: '#F5C94F',
          orange: '#EFA45C',
          bg: '#FFFDF4',
          surface: '#FFFFFF',
          'soft-green': '#F4FBE9',
          'soft-cream': '#FFF1D5',
          heading: '#43563A',
          body: '#58684C',
          footer: '#4F6938',
        },
      },
      fontFamily: {
        heading: ['"Manrope"', '"Noto Sans Tamil"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', '"Noto Sans Tamil"', 'system-ui', 'sans-serif'],
        tamil: ['"Noto Sans Tamil"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '1.25rem',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 8px 28px -8px rgba(67, 86, 58, 0.10)',
        'card-hover': '0 16px 36px -10px rgba(67, 140, 56, 0.18)',
        header: '0 4px 20px -6px rgba(67, 86, 58, 0.10)',
      },
      opacity: {
        8: '0.08',
        12: '0.12',
        14: '0.14',
        92: '0.92',
      },
    },
  },
  plugins: [],
};

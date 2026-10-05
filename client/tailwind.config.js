/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        page: 'var(--color-page)',
        surface: 'var(--color-surface)',
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          tint: 'var(--color-primary-tint)'
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          dark: 'var(--color-accent-dark)',
          tint: 'var(--color-accent-tint)'
        },
        tag: {
          DEFAULT: 'var(--color-tag-bg)',
          text: 'var(--color-tag-text)'
        }
      },
      fontFamily: {
        display: ['Sora', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif']
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        cardHover: 'var(--shadow-card-hover)',
        featured: 'var(--shadow-featured)',
        featuredHover: 'var(--shadow-featured-hover)'
      }
    }
  },
  plugins: []
};

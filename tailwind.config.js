// @type {import('tailwindcss').Config}
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
    // presets: [
    //     (await import('./stylePreset.js')).default
    // ],
    theme: {
        extend: {
            colors: {
                // Ajoutez vos couleurs personnalisées ici
                primary: '#1DA1F2',
                secondary: '#14171A',
                accent: '#657786',
            },
            spacing: {
                // Ajoutez vos valeurs d'espacement personnalisées ici
                72: '18rem',
                84: '21rem',
                96: '24rem',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
        },
    },
    plugins: [forms, typography, aspectRatio],
    darkMode: 'media',
};

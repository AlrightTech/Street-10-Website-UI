
import tailwindcssAnimate from 'tailwindcss-animate';
import scrollbar from 'tailwind-scrollbar';
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
        "./ui/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['var(--font-indie)', 'var(--font-geist-sans)', 'sans-serif'],
                mono: ['var(--font-geist-mono)', 'monospace'],
                geist: "var(--font-geist-sans), sans-serif",
                geistMono: "var(--font-geist-mono), monospace",
                indie: "var(--font-indie), cursive"
            },

        },
    },
    plugins: [
        scrollbar,
    ],
    plugins: [tailwindcssAnimate],

};


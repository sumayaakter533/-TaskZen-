/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['*'],
    theme: {
        extend: {
            colors: {
                'deep-navy': '#27374D', // For dark backgrounds like the sidebar
                'steel-blue': '#526D82', // For text or small accents
                'slate-blue': '#9DB2BF', // For highlights, buttons, or hover states
                'soft-gray': '#DDE6ED' // For light backgrounds and text
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                inter: ['Inter', 'sans-serif']
            }
        }
    },
    plugins: [require('daisyui')]
};

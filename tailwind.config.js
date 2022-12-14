/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
	],
	darkMode: 'class',
	theme: {
		fontFamily: {
			display: ['Poppins'],
			body: ['"Poppins'],
			bold: ['Poppins'],
			medium: ['Poppins'],
			semibold: ['Poppins'],
			'extra-bold': ['"Poppins"'],
			black: ['Poppins']
		}
	},
	plugins: [require('flowbite/plugin')]
};

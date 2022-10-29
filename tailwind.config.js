/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
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
		},

		extend: {
			// colors: {
			// 	Action: '#b91c1c',
			// 	Comedy: '#1d4ed8',
			// 	Thriller: '#374151',
			// 	Crime: '#7e22ce',
			// 	Adventure: '#15803d',
			// 	Animation: '#c2410c',
			// 	Drama: '#b45309',
			// 	Documentary: '#334155',
			// 	Family: '#0369a1',
			// 	Fantasy: '#047857',
			// 	History: '#a16207',
			// 	Horror: '#000000',
			// 	Music: '#0e7490',
			// 	Romance: '#be123c',
			// 	Soap: '#4d7c0f',
			// 	Reality: '#3f3f46',
			// 	'Sci-Fi & Fantasy': '#047857',
			// 	'Action & Adventure': '#b91c1c',
			// 	War: '#be185d',
			// 	Western: '#0f766e'
			// }
		}
	},
	plugins: []
};

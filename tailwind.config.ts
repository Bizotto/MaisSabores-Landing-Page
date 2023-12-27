import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#F7F6EE',
				secondary: { 100: '#9BB18E', 200: '#DCE2D2', 300: '#7CA66B' },
				tertiary: '#9e5e6f',
			},
		},
	},
	plugins: [],
}
export default config

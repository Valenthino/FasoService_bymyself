/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#153B3C',
				'secondary': '#F3CA53',
				'accent': '#034671',
				'light': '#EDEFF3',
			},
		},
	},
	plugins: [],
}
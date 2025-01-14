/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#F0EEE6",
				secondary: "#FAF9F5",
			}
		},
	},
	plugins: [],
}

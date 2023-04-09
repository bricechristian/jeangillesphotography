/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		"./src/app/**/*.{js,ts,jsx,astro}",
		"./src/pages/**/*.{js,ts,jsx,astro}",
		"./src/components/**/*.{js,ts,jsx,astro}",
	],
	corePlugins: {
		container: false,
	},
	darkMode: false,
	theme: {
		fontFamily: {
			sans: 'Montserrat, ui-sans-heading, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-heading, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			heading: "Ailerons",
		},
		colors: {
			transparent: "transparent",
			gray: "#E6E6E6",
			"dark-gray": "#999999",
			black: "#1f1f1f",
			white: "#e9e9e9",
		},
		fontSize: {
			10: "10px",
			13: "13px",
			15: "15px",
			16: "16px",
			17: "17px",
			18: "18px",
			20: "20px",
			24: "24px",
			28: "28px",
			32: "32px",
			40: "40px",
			80: "80px",
		},
		screens: {
			"2xl": { max: "1440px" },
			"2xl_min": "1441px",
			xl: { max: "1199px" },
			xl_min: "1200px",
			lg: { max: "991px" },
			lg_min: "992px",
			md: { max: "767px" },
			md_min: "768px",
			sm: { max: "479px" },
			sm_min: "480px",
		},
		extend: {
			zIndex: {
				"-1": "-1",
			},
			keyframes: {
				pulser: {
					"0%, 100%": { transform: "scale(.5)" },
					"50%": { transform: "scale(1)" },
				},
			},
			animation: {
				pulser: "pulser 2s ease-in-out infinite",
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant("supports-hover", "@media (hover)");
		}),
	],
};

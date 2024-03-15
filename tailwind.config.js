/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				xl: '2rem'
			}
		},
    extend: {},
  },
  plugins: [],
}


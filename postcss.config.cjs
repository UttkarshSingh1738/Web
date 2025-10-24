// PostCSS config using Tailwind's PostCSS plugin and autoprefixer.
// The Tailwind PostCSS plugin moved into @tailwindcss/postcss — we require it here.
module.exports = {
	plugins: [
		require('@tailwindcss/postcss'),
		require('autoprefixer'),
	],
}


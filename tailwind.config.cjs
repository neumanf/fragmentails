const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true
		},
		extend: {
			colors: {
				salmon: {
					light: '#FEEDEC',
					DEFAULT: '#FC9D9D',
					dark: '#F76C5E'
				},
				purpled: {
					DEFAULT: '#586BA4',
					dark: '#324376'
				}
			}
		}
	},
	plugins: []
};

module.exports = config;

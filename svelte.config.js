import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-netlify';
import adapter from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({
		postcss: true
	})],

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			resolve: {
				alias: {
					$lib: path.resolve('./src/lib'),
					$routes: path.resolve('./src/routes'),
				}
			}
		}
	}
};

export default config;

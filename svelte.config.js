import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
	kit: {
		adapter: adapter({
			fallback: '200.html'
		  })
	},
	preprocess: vitePreprocess()
};

export default config;

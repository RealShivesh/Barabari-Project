import uno from 'unocss/vite'
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';

const config = defineConfig( {
	build: {
		target: "es2015"
	},
	plugins: [
		uno(),
		sveltekit(),
		imagetools( { force: true } )
	],
	server: { port: 3000 }
} );
export default config;

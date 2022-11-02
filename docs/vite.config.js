import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools'

const config = defineConfig( {
	plugins: [
		sveltekit(),
		imagetools( { force: true } )
	]
} );

export default config;

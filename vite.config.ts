import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [sveltekit(), Icons({ autoInstall: true, compiler: 'svelte' })]
	// server: {
	// 	allowedHosts: ['8fb9-176-191-201-71.ngrok-free.app']
	// }
});

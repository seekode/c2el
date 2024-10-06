<script lang="ts">
	import { page } from '$app/stores';
	import NavBar from '$components/layout/NavBar.svelte';
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	type Props = {
		children: Snippet;
		data: { url: string };
	};
	const { children, data }: Props = $props();

	const urls = ['/', '/services', '/logiciels', '/contact', '/projets', '/equipe'];
	// svelte-ignore non_reactive_update
	let activeLink = data.url;

	let next = $derived.by(() => {
		const result = urls.indexOf(activeLink) < urls.indexOf(data.url);
		activeLink = data.url;
		return result;
	});
</script>

<NavBar activeLink={urls.indexOf(data.url)} />

{#key data.url}
	<div
		in:fly={{ x: next ? 200 : -200, duration: 1000, delay: 300 }}
		out:fly={{ x: next ? -200 : 200, duration: 1000 }}
	>
		{@render children()}
	</div>
{/key}

<style lang="scss">
	div {
		width: 100vw;
		min-height: 100vh;
		min-height: 100dvh;
		position: absolute;
		top: 0;
		z-index: -1;
	}
</style>

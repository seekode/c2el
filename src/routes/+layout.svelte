<script lang="ts">
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import AOS from 'aos';
	import type { Snippet } from 'svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	type Props = {
		children: Snippet;
		data: { url: string };
	};
	const { children, data }: Props = $props();

	const urls = ['/', '/services', '/logiciels', '/projets', '/equipe'];
	let activeLink = data.url;

	let next = $derived.by(() => {
		const result = urls.indexOf(activeLink) < urls.indexOf(data.url);
		activeLink = data.url;
		return result;
	});

	onMount(() => {
		AOS.init({
			duration: 500,
			easing: 'ease-in-out'
		});
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
		left: 0;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

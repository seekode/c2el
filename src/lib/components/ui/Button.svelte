<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		link?: string;
		name?: string;
		dataAos?: string;
		onclick?: (event: Event) => void;
	};

	const { children, link, onclick, name, dataAos }: Props = $props();
</script>

{#if link}
	<a href={link} {onclick} data-aos={dataAos}>{@render children()}</a>
{:else}
	<button {name} {onclick} data-aos={dataAos}>{@render children()}</button>
{/if}

<style lang="scss">
	button,
	a {
		padding: 0.5rem 1.2rem;
		border: none;
		position: relative;
		color: $bg;
		border-radius: 0.3rem;
		font-weight: bold;
		background: none;
		overflow: hidden;
		cursor: pointer;

		&::before {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			z-index: -1;
			bottom: 0;
			left: 0;
			border-radius: 0.3rem;
			background: $primary;
		}

		&::after {
			content: '';
			width: 0%;
			height: 0;
			position: absolute;
			z-index: -1;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			border-radius: 3rem 3rem 0 0;
			transition: 0.3s;
			background: $secondary;
		}

		&:hover::after {
			height: 130%;
			width: 130%;
		}
	}
</style>

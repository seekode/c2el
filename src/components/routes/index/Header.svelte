<script lang="ts">
	import Button from '$components/ui/Button.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let loaded = false;

	onMount(() => {
		loaded = true;
	});

	function scrollIntoView(event: Event) {
		const target = event.target as HTMLElement;
		if (!target) return;

		const href = target.getAttribute('href');
		if (!href) return;

		const el = document.querySelector(href);
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<svelte:head>
	<link
		rel="preload"
		href="/images/header.webp"
		as="image"
		type="image/webp"
		fetchpriority="high"
	/>
	<style>
		.center h1 {
			font-size: 2.5rem;
			text-align: center;
			content-visibility: auto;
		}
		@media (min-width: 768px) {
			.center h1 {
				font-size: 3.5rem;
			}
		}
	</style>
</svelte:head>

<header>
	<div class="logo">
		<div></div>
		{#if loaded}
			<img
				in:fly={{ x: -450, duration: 1000, delay: 200, opacity: 1 }}
				src="/images/logo.svg"
				alt="Logo C2EL"
				width="113"
				height="128"
				loading="eager"
				decoding="async"
			/>
			<h2 in:fly={{ x: -450, duration: 1000, delay: 200, opacity: 1 }}>2EL</h2>
		{/if}
	</div>
	<div class="center">
		<h1 style="display: block; visibility: visible;">
			Votre projet électrique, <br /> notre expertise
		</h1>
		<Button link="#services" onclick={scrollIntoView}>Découvrir nos services</Button>
	</div>
	<div
		id="services"
		class="bottom"
		data-aos="fade-up"
		data-aos-offset="-200"
		data-aos-duration="1500"
	>
		<h2>
			Bienvenue<span
				>chez <img
					src="/images/logo-white.svg"
					alt="Logo C2EL"
					width="30"
					height="34"
					loading="lazy"
					decoding="async"
				/>2EL</span
			>
		</h2>
		<p>
			C2EL est un bureau d’études de sous-traitance d’études électriques spécialisé dans la gestion
			de projet.
			<span>
				Notre équipe qualifiée et expérimentée est prête à vous accompagner dans la réalisation de
				vos projets électtriques, de la conception à la mise en service
			</span>
		</p>
	</div>
</header>

<style lang="scss">
	header {
		width: 100vw;
		height: 100vh;
		height: 100dvh;
		position: relative;
		background: linear-gradient(rgba(22, 32, 95, 0.1), $bg);
		overflow: hidden;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: url('/images/header.webp');
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			filter: blur(2px);
			will-change: auto;
			z-index: -1;
		}

		.logo {
			display: flex;
			align-items: center;
			position: absolute;
			top: 8rem;
			left: 5rem;
			overflow: hidden;

			> div {
				width: 0.3rem;
				height: 10rem;
				margin-right: 4rem;
				position: relative;
				z-index: 1;
				background: $primary;
				border-radius: 2rem;
			}

			img {
				height: 8rem;
				width: auto;
			}

			h2 {
				margin-left: 1rem;
				font-size: 8rem;
			}
		}

		.center {
			width: 100%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;

			h1 {
				font-size: 2.5rem;
				text-align: center;
				display: block;
				visibility: visible;

				br {
					display: none;
				}
			}
		}

		.bottom {
			width: 100%;
			position: absolute;
			bottom: 1rem;
			left: 0;
			display: flex;
			gap: 1rem;
			flex-direction: column;
			align-items: center;
			text-align: center;

			h2 {
				font-size: 2.5rem;
				display: flex;
				gap: 0.1rem;
				align-items: center;

				span {
					margin-left: 0.5rem;
				}

				img {
					height: 2rem;
					margin-left: 0.5rem;
				}
			}

			p {
				width: 72rem;
				max-width: 90%;
			}
		}
	}

	@media screen and (max-width: 850px) {
		header {
			.logo {
				top: 2rem;
				left: 2rem;

				> div {
					margin-right: 1rem;
				}
			}

			.center > h1 {
				font-size: 1.8rem;
			}
		}
	}

	@media screen and (max-width: 600px) {
		header {
			.logo {
				> div {
					height: 5rem;
				}

				img {
					height: 4rem;
				}

				h2 {
					margin-left: 0.5rem;
					font-size: 4rem;
				}
			}

			.center > h1 br {
				display: block;
			}

			.bottom span {
				display: none;
			}
		}
	}

	@media screen and (max-width: 400px) {
		header {
			.logo {
				> div {
					height: 4rem;
				}

				img {
					height: 3rem;
				}

				h2 {
					font-size: 3rem;
				}
			}
		}
	}
</style>

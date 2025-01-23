<script lang="ts">
	type Props = {
		activeLink: number;
	};
	const { activeLink }: Props = $props();

	let open = $state(false);
</script>

{#if open}
	<button class="close" onclick={() => (open = !open)} aria-label="Fermer le menu"></button>
{/if}
<nav class:open>
	<button onclick={() => (open = !open)} aria-label="Ouvrir le menu">
		<img src="/images/logo.svg" alt="logo" />
	</button>
	<div>
		<a class:active={activeLink === 0} href="/">Présentation</a>
		<a class:active={activeLink === 1} href="/services">Services</a>
		<a class:active={activeLink === 2} href="/logiciels">Logiciels</a>
		<a class:active={activeLink === 3} href="/projets">Projets réalisés</a>
		<a class:active={activeLink === 4} href="/equipe">Équipe</a>
	</div>
</nav>

<style lang="scss">
	.close {
		width: 100%;
		height: 100%;
		border: none;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		background: none;
	}

	nav {
		width: 37rem;
		padding: 0.8rem 1rem;
		position: fixed;
		z-index: 2;
		top: 2rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		border-radius: 3rem;
		background: $text-bg;
		backdrop-filter: blur(20px);
		box-shadow: 0 0 60px -20px rgba(0, 0, 0, 0.5);
		overflow: hidden;
		transition: 0.3s ease-in;

		button {
			border: none;
			display: flex;
			background: none;

			img {
				height: 3rem;
			}
		}

		div {
			width: 100%;
			margin: 0 2.5rem;
			display: flex;
			justify-content: center;
			gap: 1.5rem;

			a {
				position: relative;

				&::before {
					content: '';
					width: 1.5rem;
					height: 0.2rem;
					position: absolute;
					top: calc(100%);
					left: 50%;
					transform: translateX(-50%);
					border-radius: 5rem;
					background: $primary;
					opacity: 0;
					transition: 0.3s ease-in;
				}

				&.active::before {
					top: calc(100% + 0.4rem);
					opacity: 1;
				}
			}
		}
	}

	@media screen and (max-width: 850px) {
		nav {
			height: auto;
			max-height: 3rem;
			width: 2.8rem;
			left: auto;
			right: 2rem;
			transform: translateX(0);
			flex-direction: column;

			&.open {
				max-height: 21rem;
				width: 8rem;
				border-radius: 2rem;
			}

			img {
				cursor: pointer;
			}

			div {
				margin: 0;
				margin-top: 2rem;
				margin-bottom: 1rem;
				flex-direction: column;

				a::before {
					left: 0;
					transform: translateX(0);
				}
			}
		}
	}
</style>

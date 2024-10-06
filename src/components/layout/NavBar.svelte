<script lang="ts">
	type Props = {
		activeLink: number;
	};
	const { activeLink }: Props = $props();
</script>

<nav>
	<img src="/images/logo.svg" alt="logo" />
	<div>
		<a class:active={activeLink === 0} href="/">Présentation</a>
		<a class:active={activeLink === 1} href="/services">Services</a>
		<a class:active={activeLink === 2} href="/logiciels">Logiciels</a>
		<a class:active={activeLink === 3} href="/contact">Contact</a>
		<a class:active={activeLink === 4} href="/projets">Projets réaliser</a>
		<a class:active={activeLink === 5} href="/equipe">Équipe</a>
	</div>
</nav>

<style lang="scss">
	nav {
		padding: 0.8rem 1rem;
		position: fixed;
		top: 2rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		border-radius: 15rem;
		background: $text-bg;
		backdrop-filter: blur(50px);
		box-shadow: 0 0 60px -20px rgba(0, 0, 0, 0.5);

		img {
			height: 3rem;
		}

		div {
			margin: 0 2.5rem;
			display: flex;
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
</style>

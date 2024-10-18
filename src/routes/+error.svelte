<section>
	<h1>404</h1>
	<p>Cette page est inexistante</p>
	<a href="/">Retour à l'accueil</a>
</section>

<style lang="scss">
	section {
		width: 100vw;
		height: 100vh;
		height: 100dvh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		h1 {
			font-size: 8rem;
			color: #cbcbcb;
		}

		p {
			font-size: 2rem;
			margin-bottom: 1rem;
		}

		a {
			color: $primary;

			&:hover {
				color: $secondary;
			}
		}
	}
</style>

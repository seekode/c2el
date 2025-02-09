<section>
	<a href="https://seekode.dev">
		<img src="images/seekode.svg" alt="Seekode logo" loading="lazy" width="17.7" height="20.7" />
		© 2024 Nicolas Texier. Tous droits réservés.
	</a>
</section>

<style lang="scss">
	section {
		display: flex;
		justify-content: center;

		a {
			margin: 2rem;
			padding: 0.3rem 0.5rem;
			position: relative;
			z-index: 0;
			display: flex;
			align-items: center;
			color: $bg;
			background: $text;
			border-radius: 0.5rem;
			font-weight: 500;
			overflow: hidden;

			&::after {
				content: '';
				width: 0%;
				height: 0;
				position: absolute;
				z-index: -1;
				bottom: -5px;
				left: 50%;
				transform: translateX(-50%);
				border-radius: 3rem 3rem 0 0;
				transition: 0.5s;
				background: $secondary;
			}

			&:hover::after {
				height: 130%;
				width: 130%;
			}

			img {
				height: 1.3rem;
				margin-right: 0.5rem;
			}
		}
	}
</style>

<script>
	import PresCarrousel from './PresCarrousel.svelte';
</script>

<section>
	<div class="content">
		<h2><img src="/images/logo.svg" alt="logo" loading="lazy" width="71" height="80" />2EL</h2>
		<p data-aos="fade-up">
			Bienvenue chez C2EL, votre partenaire d'excellence en ingénierie électrique. Fondée sur les
			principes de l'innovation, de la précision et de la qualité, C2EL se distingue dans le domaine
			de l'ingénierie électrique par son approche personnalisée et son engagement envers la réussite
			de chaque projet.
		</p>
		<p data-aos="fade-up">
			Notre mission est de fournir des solutions d'ingénierie électrique de premier plan qui
			répondent aux besoins spécifiques de nos clients. Chez C2EL, nous nous engageons à transformer
			vos idées en réalités fonctionnelles, efficaces et sécurisées, en utilisant les technologies
			les plus avancées et les meilleures pratiques du secteur.
		</p>
		<div class="carrousel" data-aos="fade-up">
			<PresCarrousel />
		</div>
	</div>
	<div class="bg"></div>
</section>

<style lang="scss">
	section {
		margin-top: 5rem;
		padding: 8rem 0;
		padding-left: 5rem;
		position: relative;
		background: $text;

		&::before,
		&::after {
			content: '';
			width: 100%;
			height: 1rem;
			position: absolute;
			z-index: 1;
			left: 0;
			background: $bg;
		}

		&::before {
			top: -1px;
			border-radius: 0 0 1rem 1rem;
		}

		&::after {
			bottom: 0px;
			border-radius: 1rem 1rem 0 0;
		}

		.bg {
			height: 100%;
			width: 50%;
			object-fit: cover;
			position: absolute;
			top: 0;
			right: 0;
			background: url('/images/pres.webp');

			&::before {
				content: '';
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background: linear-gradient(to right, $text, rgba(237, 237, 237, 0.5));
			}
		}

		.content {
			position: relative;
			z-index: 1;

			* {
				color: $bg;
			}

			h2 {
				font-size: 5.5rem;
				display: flex;
				align-items: center;

				&::before {
					content: '';
					width: 0.3rem;
					height: 7rem;
					margin-right: 2rem;
					position: relative;
					background: $primary;
					border-radius: 2rem;
				}

				img {
					height: 5rem;
					margin-right: 0.5rem;
				}
			}

			p {
				width: calc(90% - 5rem);
				max-width: 70rem;
				margin: 2rem 0;
			}
		}

		.carrousel {
			width: calc(90% - 5rem);
		}
	}

	@media screen and (max-width: 850px) {
		section {
			padding-left: 1rem;

			.content p {
				width: calc(100% - 2rem);
			}

			.carrousel {
				width: calc(100% - 2rem);
			}
		}
	}

	@media screen and (max-width: 500px) {
		section {
			padding: 4rem 1rem;

			.content h2 {
				font-size: 3.5rem;

				&::before {
					content: '';
					width: 0.3rem;
					height: 5rem;
					margin-right: 1rem;
					position: relative;
					background: $primary;
					border-radius: 2rem;
				}

				img {
					height: 3rem;
					margin-right: 0.5rem;
				}
			}

			.carrousel {
				width: 100%;
			}
		}
	}
</style>

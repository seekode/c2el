<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section>
	<div class="left">
		<div data-aos="fade-right">
			<img
				src="/images/index/services-1.webp"
				loading="lazy"
				alt="services"
				width="141"
				height="88"
			/>
			<div>
				<h3>Conception électrique</h3>
				<p>
					C2EL élève la conception électrique à un niveau supérieur, combinant expertise technique
					et innovation pour créer des solutions sur mesure et efficaces. Notre approche garantit
					des projets optimisés, sûrs et conformes aux normes en vigueur.
				</p>
			</div>
		</div>
		<div data-aos="fade-right">
			<img
				src="/images/index/services-2.webp"
				loading="lazy"
				alt="services"
				width="141"
				height="88"
			/>
			<div>
				<h3>Appel d’offres</h3>
				<p>
					Chez C2EL, notre expertise en appels d'offres transforme vos projets d'ingénierie
					électrique en propositions gagnantes, grâce à une préparation technique précise et
					innovante. Nous maximisons vos chances de succès en fournissant des dossiers complets et
					compétitifs, reflétant notre engagement envers l'excellence.
				</p>
			</div>
		</div>
		<div data-aos="fade-right">
			<img
				src="/images/index/services-3.webp"
				loading="lazy"
				alt="services"
				width="141"
				height="88"
			/>
			<div>
				<h3>Assistance technique</h3>
				<p>
					C2EL offre une assistance technique experte, assurant un soutien fiable et personnalisé à
					chaque phase de votre projet électrique. Nous nous engageons à résoudre vos défis
					techniques avec rapidité et précision.
				</p>
			</div>
		</div>
	</div>
	<div class="right">
		<img src="/images/services.png" loading="lazy" alt="services" width="330" height="250" />
		<Button link="/services" dataAos="zoom-up">Plus d'informations</Button>
	</div>
</section>

<style lang="scss">
	section {
		margin-top: 10rem;
		display: flex;
		justify-content: space-evenly;

		.left {
			width: 40rem;
			max-width: 60%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 2rem;

			> div {
				padding: 1rem;
				display: flex;
				align-items: center;
				gap: 1rem;
				border-radius: 0.3rem;
				background: linear-gradient(to right, $text, #b7d8e9);

				img {
					max-height: 88px;
					height: auto;
					width: auto;
					border-radius: 0.3rem;
				}

				div {
					margin-right: 0.5rem;
					display: flex;
					flex-direction: column;
					gap: 0.5rem;

					h3 {
						color: $bg;
					}

					p {
						color: $bg;
						font-size: 0.7rem;
					}
				}
			}
		}

		.right {
			width: 30%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 2rem;

			img {
				width: 100%;
				height: auto;
				max-width: 40rem;
			}
		}
	}

	@media screen and (max-width: 1000px) {
		section {
			margin-top: 3rem;
			flex-direction: column;
			align-items: center;

			.left {
				max-width: 95%;
			}

			.right {
				width: 100%;
				margin-top: 5rem;
				flex-direction: row;
				justify-content: center;

				img {
					width: 20rem;
				}
			}
		}
	}

	@media screen and (max-width: 530px) {
		section {
			.left {
				img {
					display: none;
				}
			}

			.right {
				margin-top: 3rem;
				flex-direction: column;

				img {
					width: 10rem;
				}
			}
		}
	}
</style>

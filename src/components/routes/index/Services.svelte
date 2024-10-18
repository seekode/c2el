<script>
	import Button from '$components/ui/Button.svelte';
</script>

<section>
	<div class="left">
		<div>
			<img src="/images/index/services-1.jpg" alt="services" />
			<div>
				<h3>Conception électrique</h3>
				<p>
					C2EL élève la conception électrique à un niveau supérieur, combinant expertise technique
					et innovation pour créer des solutions sur mesure et efficaces. Notre approche garantit
					des projets optimisés, sûrs et conformes aux normes en vigueur.
				</p>
			</div>
		</div>
		<div>
			<img src="/images/index/services-2.jpg" alt="services" />
			<div>
				<h3>Conception électrique</h3>
				<p>
					C2EL élève la conception électrique à un niveau supérieur, combinant expertise technique
					et innovation pour créer des solutions sur mesure et efficaces. Notre approche garantit
					des projets optimisés, sûrs et conformes aux normes en vigueur.
				</p>
			</div>
		</div>
		<div>
			<img src="/images/index/services-3.jpg" alt="services" />
			<div>
				<h3>Conception électrique</h3>
				<p>
					C2EL élève la conception électrique à un niveau supérieur, combinant expertise technique
					et innovation pour créer des solutions sur mesure et efficaces. Notre approche garantit
					des projets optimisés, sûrs et conformes aux normes en vigueur.
				</p>
			</div>
		</div>
	</div>
	<div class="right">
		<img src="/images/services.png" alt="services" />
		<Button link="/services">Plus d'informations</Button>
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

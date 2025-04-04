<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';

	const items = [
		{
			img: 'softwares.svg',
			title: 'Logiciels',
			text: [
				'Nous utilisons une vaste gamme de logiciels professionnels spécifiquement conçus pour la conception électrique.',
				'Cela nous permet de bénéficier de solutions techniques précises et personnalisées pour chaque projet ainsi que d’offrir des avantages pour nos clients tel que la réduction des coûts et des délais.'
			],
			link: '/logiciels'
		},
		{
			img: 'projects.webp',
			title: 'Projets réalisés',
			text: [
				'Chez C2EL nous sommes fiers de travailler sérieusement sur vos projets, c’est pourquoi nous sommes ravi de les mettre en avant sur notre site.',
				'Vous pouvez trouver ici les détails sur la réhabilitation des halles qui est l’un de nos nombreux projets réalisés à ce jour. C’est un exemple concret de l’excellence de notre travail dans le domaine de la sous-traitance d’études électriques'
			],
			link: '/projets'
		}
	];
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>

{#each items as item, i}
	<section class:reverse={i % 2 !== 0}>
		<div data-aos={i == 0 ? 'fade-right' : 'fade-left'}>
			<img src={`images/${item.img}`} alt={item.title} loading="lazy" width="300" height="300" />
		</div>
		<div>
			<div data-aos={i == 0 ? 'fade-left' : 'fade-right'}>
				<h2>{item.title}</h2>
				{#each item.text as text}
					<p>{text}</p>
				{/each}
			</div>
			<Button link={item.link} dataAos="fade-up">Plus d'informations</Button>
		</div>
	</section>
{/each}

<style lang="css">
	section {
		width: 100%;
		margin: 15rem 0;
		display: flex;
		justify-content: center;
		gap: 10%;

		&.reverse {
			flex-direction: row-reverse;
		}

		> div {
			width: 40%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1rem;
		}

		h2 {
			text-align: center;
		}

		img {
			max-width: 100%;
			max-height: 300px;
			width: auto;
			height: auto;
			border-radius: 0.5rem;
		}

		p {
			text-align: center;
		}
	}

	@media screen and (max-width: 1200px) {
		section {
			margin: 10rem 0;
		}
	}

	@media screen and (max-width: 1000px) {
		section {
			margin: 5rem 0;
			gap: 5%;

			> div {
				width: 45%;
			}
		}
	}

	@media screen and (max-width: 750px) {
		section,
		section.reverse {
			flex-direction: column;
			gap: 2rem;

			> div {
				width: 100%;
			}

			img {
				height: 10rem;
				max-width: none;
				max-height: none;
			}

			p {
				width: 95%;
			}
		}
	}
</style>

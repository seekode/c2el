<script lang="ts">
	import Footer from '$components/layout/Footer.svelte';
	import CardServices from '$components/routes/services/CardServices.svelte';
	import Seekode from '$components/ui/Seekode.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let cards: Array<{ img: string; title: string; description: string }> = [];

	onMount(() => {
		cards = [
			{
				img: 'expertise',
				title: 'Expertise Technique Approfondie',
				description:
					"Nous mettons en évidence notre expertise technique acquise grâce à des années d'expérience dans le domaine des études électriques, ce qui nous permet de proposer des solutions innovantes et adaptées à chaque projet."
			},
			{
				img: 'approche',
				title: 'Approche Personnalisée',
				description:
					'Nous offrons des services sur mesure, adaptés aux besoins spécifiques de chaque client, en prenant en compte les particularités de chaque projet pour fournir des solutions optimales.'
			},
			{
				img: 'conformite',
				title: 'Conformité aux Normes',
				description:
					'Nous nous engageons à garantir que tous les projets respectent les normes et réglementations en vigueur, assurant ainsi la sécurité et la fiabilité des installations électriques.'
			},
			{
				img: 'technologies',
				title: 'Utilisation de Technologies Avancées',
				description:
					"Nous mettons en avant l'utilisation de logiciels et de technologies de pointe pour la réalisation des études, ce qui permet d'optimiser la conception, de réduire les coûts et de minimiser les délais de réalisation."
			},
			{
				img: 'equipe',
				title: 'Équipe Qualifiée',
				description:
					'Notre équipe est composée de professionnels hautement qualifiés et régulièrement formés aux dernières évolutions du secteur, ce qui nous permet de maintenir un haut niveau de qualité dans nos services.'
			},
			{
				img: 'durabilite',
				title: 'Durabilité et Efficacité Énergétique',
				description:
					"Nous nous engageons en faveur de la durabilité et de l'efficacité énergétique, en proposant des solutions qui contribuent à réduire l'empreinte écologique des projets et à optimiser la consommation d'énergie."
			},
			{
				img: 'reactivite',
				title: 'Réactivité et Flexibilité',
				description:
					'Nous sommes capables de répondre rapidement aux demandes des clients et à nous adapter aux changements de dernière minute, ce qui est crucial pour le respect des délais et la réussite des projets.'
			}
		];
	});
</script>

<div class="container">
	<h1>Nos Services</h1>
	<div>
		{#each cards as { img, title, description }, i}
			<div transition:fly={{ y: 200, duration: 1000, delay: i * 200 }}>
				<CardServices id={i} {img} {title} {description} />
			</div>
		{/each}
	</div>
</div>
<Footer />
<Seekode />

<style lang="scss">
	.container {
		width: 100%;
		margin-top: 10rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		> div {
			width: 95%;
			max-width: 85rem;
			margin: 5rem 0;
			display: flex;
			justify-content: start;
			gap: 2rem;
			flex-wrap: wrap;
		}
	}

	@media screen and (max-width: 1435px) {
		.container {
			> div {
				max-width: 56rem;
			}
		}

		.container {
			> div {
				max-width: 56rem;
			}
		}
	}
</style>

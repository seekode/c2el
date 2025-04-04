<script>
	import Footer from '$lib/components/layout/Footer.svelte';
	import Seekode from '$lib/components/ui/Seekode.svelte';
</script>

<h1>L'Équipe de C2EL</h1>
<section>
	<hr />
	<h2>Rencontrez Notre Équipe d'Experts en Gestion de Projet</h2>
	<p>
		Nous sommes fiers de présenter notre équipe hautement qualifiée et expérimentée, spécialisée
		dans les études électriques et la gestion de projets. Chaque membre de notre équipe apporte une
		expertise unique et des compétences exceptionnelles pour répondre aux besoins de nos clients.
	</p>
</section>
<section>
	<hr />
	<div>
		<div>
			<h2>Ingénierie Électrique</h2>
			<p>
				Nos experts en ingénierie électrique sont des spécialistes de la conception de systèmes
				électriques, de l'analyse de réseau et de la gestion de l'énergie. Leur expertise assure des
				solutions fiables et innovantes pour chaque projet.
			</p>
		</div>
		<div>
			<h2>Simulation et Modélisation</h2>
			<p>
				Notre équipe maîtrise l'utilisation de logiciels spécialisés pour la simulation de circuits
				électriques et la modélisation de systèmes d'alimentation, garantissant une approche précise
				et efficace de la conception électrique.
			</p>
		</div>
		<div>
			<h2>Automatisation et Contrôle</h2>
			<p>
				Nos experts en automatisation et contrôle développent des systèmes avancés pour le contrôle
				des processus industriels, offrant des solutions personnalisées pour améliorer l'efficacité
				opérationnelle.
			</p>
		</div>
	</div>
</section>
<section>
	<hr />
	<div>
		<div>
			<h2>Énergies Renouvelables</h2>
			<p>
				Notre équipe est spécialisée dans la conception et l'intégration de systèmes d'énergie
				renouvelable, tels que le solaire et l'éolien, contribuant à des solutions durables et
				respectueuses de l'environnement.
			</p>
		</div>
		<div>
			<h2>Normes et Réglementations</h2>
			<p>
				Nos experts possèdent une connaissance approfondie des normes internationales régissant les
				installations électriques, assurant une conformité totale et une sécurité optimale pour tous
				les projets.
			</p>
		</div>
	</div>
</section>
<section>
	<hr />
	<h2>Rencontrez notre équipe et découvrez notre expertise</h2>
	<p>
		Nous sommes prêts à mettre nos compétences au service de votre projet. Contactez-nous dès
		maintenant pour en savoir plus.
	</p>
</section>
<Footer />
<Seekode />

<style lang="scss">
	h1 {
		width: 100%;
		margin-top: 10rem;
		text-align: center;
	}

	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		* {
			width: 90%;
			max-width: 70rem;
		}

		hr {
			margin: 3rem 0;
			color: $text-bg;
		}

		h2 {
			color: $primary;
			font-size: 1.3rem;
		}

		> div {
			display: flex;
			justify-content: space-around;
			gap: 1.5rem;

			> div {
				flex: 1;
				display: flex;
				flex-direction: column;
				gap: 1rem;
			}
		}
	}
</style>

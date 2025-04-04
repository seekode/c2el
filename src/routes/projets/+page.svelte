<script>
	import Footer from '$lib/components/layout/Footer.svelte';
	import Seekode from '$lib/components/ui/Seekode.svelte';
</script>

<h1>Projets Réalisés</h1>
<section>
	<hr />
	<h2>Réhabilitation des Halles</h2>
	<p>
		Nous sommes ravis de mettre en avant notre projet de réhabilitation des halles, un exemple
		concret de l'excellence de notre travail dans le domaine de la sous-traitance d'études
		électriques. Notre implication dans ce projet a été marquée par une rénovation complète du
		parking des halles de l'abbaye, une entreprise d'envergure qui a mis en lumière notre expertise
		en gestion de projet et notre dévouement envers la durabilité et l'efficacité énergétique.
	</p>
	<p>
		Nous sommes ravis de mettre en avant notre projet de réhabilitation des halles, un exemple
		concret de l'excellence de notre travail dans le domaine de la sous-traitance d'études
		électriques. Notre implication dans ce projet a été marquée par une rénovation complète du
		parking des halles de l'abbaye, une entreprise d'envergure qui a mis en lumière notre expertise
		en gestion de projet et notre dévouement envers la durabilité et l'efficacité énergétique.
	</p>
	<p>
		Notre expertise en gestion de projet a été mise en évidence par notre capacité à coordonner
		efficacement les différentes phases du projet, en respectant les délais et en assurant une
		communication transparente avec toutes les parties prenantes impliquées. Grâce à notre rigueur
		et notre professionnalisme, nous avons réussi à livrer le projet dans les temps impartis, tout
		en maintenant des normes de qualité élevées.
	</p>
	<p>
		De plus, notre engagement en matière de durabilité et d'efficacité énergétique a été au cœur de
		notre approche tout au long du projet. Nous avons intégré des solutions innovantes visant à
		réduire la consommation d'énergie et à minimiser l'empreinte environnementale du parking rénové,
		démontrant ainsi notre engagement envers la protection de l'environnement et le développement
		durable.
	</p>
	<p>
		En résumé, notre projet de réhabilitation des halles, avec son focus sur le parking des halles
		de l'abbaye, est un exemple éloquent de notre capacité à gérer des projets d'envergure tout en
		mettant en avant notre expertise en gestion de projet et notre engagement en matière de
		durabilité et d'efficacité énergétique. Nous sommes fiers de notre contribution à ce projet
		emblématique et sommes impatients de poursuivre notre mission d'excellence dans tous nos projets
		futurs.
	</p>
	<img src="/images/projects.webp" alt="halles" loading="lazy" />
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

		img {
			margin-top: 3rem;
			border-radius: 0.3rem;
		}
	}
</style>

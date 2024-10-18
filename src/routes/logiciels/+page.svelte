<script>
	import Footer from '$components/layout/Footer.svelte';
	import Seekode from '$components/ui/Seekode.svelte';
</script>

<header>
	<h1>Logiciels</h1>
	<div>
		<img src="/images/softwares/softwares.webp" alt="header" />
	</div>
</header>
<section>
	<p>
		Les logiciels que nous utilisons chez C2EL sont spécifiquement conçus pour la conception
		électrique, le chiffrage et devis, les notes de calcul et le dimensionnement. Leur
		fonctionnalité avancée et leur adaptabilité offrent de nombreux avantages à nos clients en
		termes d'efficacité et de qualité.
	</p>
	<div>
		<div>
			<h3>Fonctionnalités Avancées</h3>
			<p>
				Nos logiciels offrent des fonctionnalités avancées pour la conception électrique, ce qui
				nous permet de fournir des solutions techniques précises et personnalisées pour chaque
				projet.
			</p>
		</div>
		<div>
			<h3>Avantages pour Nos Clients</h3>
			<p>
				Nos logiciels offrent de nombreux avantages à nos clients, notamment une optimisation des
				processus, une réduction des coûts et des délais, ainsi qu'une amélioration de la qualité
				des conceptions électriques.
			</p>
		</div>
	</div>
	<hr />
	<h2>Nous exploitons une vaste gamme de logiciels spécialisés :</h2>
	<ul>
		<h3>Dans le domaine de la conception graphique, nous utilisons :</h3>
		<div>
			<li>Autocad</li>
			<li>REVIT</li>
			<li>E PLAN P8</li>
			<li>SEE ELECTRICAL</li>
			<li>SOLIDWORKS</li>
		</div>
	</ul>
	<ul>
		<h3>Pour l'élaboration des notes de calculs, nous faisons appel à :</h3>
		<div>
			<li>CANECO BT</li>
			<li>DIALUX</li>
		</div>
	</ul>
	<ul>
		<h3>Et pour l'estimation et le chiffrage des projets, nous utilisons :</h3>
		<div>
			<li>Optima</li>
		</div>
	</ul>
</section>
<Footer />
<Seekode />

<style lang="scss">
	h3 {
		font-size: 1rem;
		color: $primary;
	}

	header {
		width: 100vw;
		max-width: 130rem;
		margin-top: 10rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 2rem;

		img {
			max-width: 75vw;
			max-height: 30rem;
			border-radius: 0.5rem;
		}
	}

	section {
		width: 75vw;
		max-width: 130rem;
		margin-top: 5rem;
		padding: 0 12.5vw;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;

		> div {
			width: 100%;
			display: flex;
			gap: 2rem;

			> div {
				width: calc(50% - 1rem);
				display: flex;
				flex-direction: column;
				gap: 1rem;
			}
		}

		ul {
			div {
				margin-left: 3rem;
				margin-top: 1rem;
			}
		}
	}

	@media screen and (max-width: 1250px) {
		header {
			width: 100vw;
			flex-direction: column;
			gap: 5rem;
		}
	}

	@media screen and (max-width: 600px) {
		section > div {
			flex-direction: column;

			> div {
				width: 100%;
			}
		}
	}
</style>

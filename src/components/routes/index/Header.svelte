<header>
	<div class="bottom">
		<h2>Bienvenue chez <img src="/images/logo-white.svg" alt="" />2EL</h2>
		<p>
			C2EL est un bureau d’études de sous-traitance d’études électriques spécialisé dans la gestion
			de projet. Notre équipe qualifiée et expérimentée est prête à vous accompagner dans la
			réalisation de vos projets électtriques, de la conception à la mise en service
		</p>
	</div>
</header>

<style lang="scss">
	header {
		width: 100vw;
		height: 100vh;
		height: 100dvh;
		position: relative;
		background: linear-gradient(rgba(22, 32, 95, 0.1), $bg);
		overflow: hidden;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: url('/images/header.jpg');
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			filter: blur(5px);
			z-index: -1;
		}

		.bottom {
			width: 72rem;
			position: absolute;
			bottom: 1rem;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			gap: 1rem;
			flex-direction: column;
			align-items: center;
			text-align: center;

			h2 {
				font-size: 2.5rem;
				display: flex;
				gap: 0.1rem;
				align-items: center;

				img {
					height: 2rem;
					margin-left: 1rem;
				}
			}
		}
	}
</style>

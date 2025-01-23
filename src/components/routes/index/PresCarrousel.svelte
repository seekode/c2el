<script lang="ts">
	import IconExpert from '~icons/mingcute/medal-fill';
	import IconInnov from '~icons/mingcute/refresh-3-fill';
	import IconCustom from '~icons/mingcute/paint-2-fill';
	import IconHandCheck from '~icons/mingcute/heart-hand-fill';
	import { fade } from 'svelte/transition';

	const items = [
		{
			title: 'Expertise Technique',
			description:
				"Notre équipe d'ingénieurs et de techniciens hautement qualifiés possède une expertise approfondie dans tous les aspects de l'ingénierie électrique."
		},
		{
			title: 'Innovation',
			description:
				'Nous adoptons les dernières technologies et innovations pour fournir des solutions avant-gardistes qui répondent aux défis complexes de nos clients.'
		},
		{
			title: 'Personnalisation',
			description:
				'Chez C2EL, nous comprenons que chaque projet est unique. Nous travaillons étroitement avec nos clients pour offrir des solutions sur mesure qui répondent parfaitement à leurs besoins.'
		},
		{
			title: 'Engagement envers la Qualité',
			description:
				'La qualité est au cœur de tout ce que nous faisons. Nous nous engageons à livrer des projets qui dépassent les attentes de nos clients, dans le respect des délais et des budgets.'
		}
	];

	let active = $state(0);
</script>

<div class="container">
	<div class="left">
		<div style={`top: calc((100% / 8) * ${active * 2 + 1})`}></div>
		<button
			aria-label="Expertise Technique"
			class:active={active === 0}
			onclick={() => (active = 0)}
		>
			<IconExpert />
		</button>
		<button aria-label="Innovation" class:active={active === 1} onclick={() => (active = 1)}>
			<IconInnov />
		</button>
		<button aria-label="Personnalisation" class:active={active === 2} onclick={() => (active = 2)}>
			<IconCustom />
		</button>
		<button
			aria-label="Engagement envers la Qualité"
			class:active={active === 3}
			onclick={() => (active = 3)}
		>
			<IconHandCheck />
		</button>
	</div>
	<div class="right">
		<h2>Pourquoi choisir C2EL ?</h2>
		<div>
			{#key active}
				<div>
					<h3 in:fade={{ delay: 400 }} out:fade>{items[active].title}</h3>
					<p in:fade={{ delay: 400 }} out:fade>{items[active].description}</p>
				</div>
			{/key}
		</div>
	</div>
</div>

<style lang="scss">
	* {
		color: $bg;
	}

	.container {
		width: 100%;
		display: flex;
		gap: 1rem;

		.left {
			width: 3rem;
			height: 100%;
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;

			> div {
				width: 0.2rem;
				height: 1.2rem;
				position: absolute;
				left: 0.3rem;
				transform: translateY(-50%);
				background: $primary;
				border-radius: 0.2rem;
				transition: 0.3s ease-in;
			}

			> button {
				width: 3rem;
				height: 3rem;
				border: none;
				font-size: 1.4rem;
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				color: $bg;
				cursor: pointer;
				background: none;

				&::before {
					content: '';
					width: 0%;
					height: 0%;
					position: absolute;
					z-index: -1;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					border-radius: 0.2rem;
					background: $onbg;
					transition: 0.3s ease-in;
					transition-delay: 0.1s;
				}

				&.active::before {
					width: 100%;
					height: 100%;
				}
			}
		}

		.right {
			flex: 1;
			max-width: 60rem;
			margin-left: 2rem;
			display: flex;
			flex-direction: column;
			gap: 1.5rem;

			> div {
				flex: 1;
				padding: 1rem;
				position: relative;
				background: $onbg;
				border-radius: 0.5rem;

				> div {
					width: calc(100% - 2rem);
					position: absolute;
					display: flex;
					flex-direction: column;
					gap: 1rem;
				}
			}
		}
	}
	@media screen and (max-width: 500px) {
		.container .right {
			margin-left: 0;
		}
	}

	@media screen and (max-width: 420px) {
		.container .right {
			h2 {
				display: none;
			}

			> div {
				padding: 0.5rem;

				> div {
					gap: 0.5rem;
				}
			}
		}
	}
</style>

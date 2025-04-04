<script lang="ts">
	import Badge from "../ui/Badge.svelte";
	import Map from "../ui/Map.svelte";


	const networks: Array<{ title: string; img: string; color: string; link: string }> = [
		{
			title: 'Partager',
			img: '/images/networks/facebook.svg',
			color: '#4267B2',
			link: 'http://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.c2el.fr%2F'
		},
		{
			title: 'Partager',
			img: '/images/networks/linkedin.svg',
			color: '#00669C',
			link: 'http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.c2el.fr%2F'
		},
		{
			title: 'Partager',
			img: '/images/networks/x.svg',
			color: '#0D0D0D',
			link: 'http://x.com/intent/post?text=https%3A%2F%2Fwww.c2el.fr%2F'
		}
	];

	const contacts: Array<{ title: string; img: string; color: string; link: string }> = [
		{
			title: '07 56 99 17 07',
			img: '/images/networks/phone.svg',
			color: '#017C4B',
			link: 'tel:+33756991707'
		},
		{
			title: 'Email',
			img: '/images/networks/mail.svg',
			color: '#16205F',
			link: 'mailto:l.balard@c2el.fr'
		},
		{
			title: 'LinkedIn',
			img: '/images/networks/linkedin.svg',
			color: '#00669C',
			link: 'https://www.linkedin.com/in/lionel-balard-082344181/'
		}
	];
</script>

<footer>
	<div class="left">
		<div data-aos="zoom-in">
			<Map />
		</div>
	</div>
	<div class="right">
		<div data-aos="zoom-in">
			<h2>Partager</h2>
			<div>
				{#each networks as { title, img, color, link }}
					<Badge {title} {img} {color} {link} />
				{/each}
			</div>
		</div>
		<div data-aos="zoom-in">
			<h2>Contact</h2>
			<div>
				{#each contacts as { title, img, color, link }}
					<Badge {title} {img} {color} {link} />
				{/each}
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		width: 100%;
		display: flex;

		> div {
			width: 50%;
			height: 25rem;
			margin: 5rem 0;
			transition: all 0.5s ease;

			&.left {
				width: calc(50% - 5rem);
				padding: 0 5rem;

				div {
					width: 100%;
					height: 100%;
					border-radius: 0.5rem;
					overflow: hidden;
				}
			}

			&.right {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-around;

				> div {
					width: 20rem;
					padding: 1.5rem;
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 1.5rem;
					border-radius: 0.5rem;
					background: $text;

					h2 {
						color: $bg;
					}

					div {
						display: flex;
						gap: 0.5rem;
						flex-wrap: wrap;
					}
				}
			}
		}
	}

	@media screen and (max-width: 1400px) {
		footer {
			> div.left {
				width: calc(100% - 35rem);
			}

			.right {
				width: 30rem;
			}
		}
	}

	@media screen and (max-width: 1000px) {
		footer {
			flex-direction: column-reverse;

			> div.left {
				width: calc(100% - 10rem);
				margin-top: 3rem;
			}

			> div.right {
				height: auto;
				width: 100%;
				margin-top: 10rem;
				margin-bottom: 0;
				flex-direction: row;
			}
		}
	}

	@media screen and (max-width: 800px) {
		footer {
			align-items: center;

			> div.left {
				width: 95%;
				padding: 0;
			}

			> div.right {
				flex-direction: column;
				gap: 1rem;

				> div {
					max-width: calc(95vw - 3rem);
				}
			}
		}
	}
</style>

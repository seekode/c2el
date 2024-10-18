<script lang="ts">
	type Props = {
		img: string;
		title: string;
		description: string;
	};

	const { img, title, description }: Props = $props();
</script>

<section>
	<img src={`/images/services/${img}.webp`} alt={title} />
	<h2>{title}</h2>
	<p>{description}</p>
</section>

<style lang="scss">
	section {
		width: 25rem;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 1rem;
		background: $bg;
		border-radius: 0.8rem;
		box-shadow: 0 0 60px -20px rgba(0, 0, 0, 1);
		transition: 0.3s ease-in;

		&:hover {
			box-shadow: 0 0 100px -10px rgba(0, 0, 0, 1);
		}

		img {
			width: 100%;
			height: 15rem;
			object-fit: cover;
			border-radius: 0.5rem;
		}
	}
</style>

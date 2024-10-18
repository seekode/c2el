<script lang="ts">
	type Props = {
		title: string;
		img: string;
		color: string;
		link: string;
	};
	const { title, img, color, link }: Props = $props();
</script>

<a href={link} target="_blank" style={`background: ${color}`}>
	<img src={img} alt="logo" />
	<p>{title}</p>
</a>

<style lang="scss">
	a {
		padding: 0.3rem 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border-radius: 0.3rem;

		img {
			height: 0.8rem;
		}

		p {
			font-size: 0.8rem;
			font-weight: bold;
		}
	}
</style>

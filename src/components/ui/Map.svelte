<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let mapElement: HTMLDivElement;
	let map: any | undefined;

	onMount(async () => {
		const leaflet = await import('leaflet');

		map = leaflet.map(mapElement, {
			center: [43.883786162897835, 1.5996887266654025],
			zoom: 15,
			scrollWheelZoom: true
		});

		leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

		leaflet
			.marker([43.883786162897835, 1.5996887266654025])
			.addTo(map)
			.bindPopup(
				'<b>C2EL :</b> 131 chemin de la serre 81630 Tauriac<br/><a href="https://maps.app.goo.gl/VrDHwQQZoJSqWZ8SA" target="_blank">Voir sur Google Maps</a>'
			)
			.openPopup();
	});

	onDestroy(() => {
		if (map) {
			map.remove();
			map = undefined;
		}
	});
</script>

<div bind:this={mapElement}></div>

<style lang="scss">
	@import 'leaflet/dist/leaflet.css';
	div {
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 1;
	}
</style>

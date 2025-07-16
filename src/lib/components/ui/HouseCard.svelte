<script lang="ts">
	import { fade } from 'svelte/transition';

	let img = 'https://images.unsplash.com/photo-1721322800607-8c38375eef04';
	console.log('Rendered');
</script>

<div class="w-full overflow-hidden rounded bg-teal-400" transition:fade={{ delay: 200 }}>
	<div>
		<img src={img} alt={img} class="aspect-3/2" />
	</div>
</div>

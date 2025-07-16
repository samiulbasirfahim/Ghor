<script lang="ts">
	import { page } from '$app/state';
	import { HouseCard } from '$lib/components';
	import LazyWrapper from '$lib/utils/LazyWrapper.svelte';

	let query = $derived.by(() => {
		return page.url.searchParams;
	});
</script>

<div class="container mx-auto p-4">
	<!-- <p>{query}</p> -->
	<div class="my-4 grid grid-cols-1 gap-4 md:grid-cols-4">
		{#each Array.from({ length: 20 }, (_, i) => i + 1) as i (i)}
			<LazyWrapper>
				<HouseCard />
			</LazyWrapper>
		{/each}
	</div>
</div>

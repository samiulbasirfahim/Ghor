<script lang="ts">
	import { page } from '$app/state';
	import { HouseCard } from '$lib/components';
	import type { HouseListItem } from '$lib/types';
	import LazyWrapper from '$lib/utils/LazyWrapper.svelte';

	let query = $derived.by(() => {
		return page.url.searchParams;
	});

	let house: HouseListItem = {
		price: 120000,
		img: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
		title: 'Modern 3 Bedroom Apartment in Dhanmondhi, hospital & fire service station nearby',
		location: 'Dhanmondhi, Dhaka',
		tags: ['verified', 'urgent', 'featured'],
		bed: 3,
		bath: 2,
		sqft: 1200,
		category: 'House',
		type: 'Sale',
		email: 'support@ghor.com.bd',
		phones: ['+8804928930', '+09820984209'],
		id: 'LKFJSDLKFDS2398',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero accusamus voluptate quia ex necessitatibus.'
	};
</script>

<div class="flex">
	<!-- <p>{query}</p> -->
	<aside class="w-1/4"></aside>
	<div class="isolate my-4 grid w-full grid-cols-4 gap-3">
		{#each Array.from({ length: 20 }, (_, i) => i + 1) as i (i)}
			<LazyWrapper>
				<HouseCard {house} />
			</LazyWrapper>
		{/each}
	</div>
	<aside class="w-1/4"></aside>
</div>

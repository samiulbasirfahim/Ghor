<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';
	import type { HouseListItem as House } from '$lib/types/house';

	let { house }: { house: House } = $props();

	const tagColors = {
		verified: 'badge-success text-white',
		urgent: 'badge-error text-white',
		featured: 'badge-warning text-base-content'
	};

	const tagIcons = {
		verified: 'mdi:check-circle',
		urgent: 'mdi:alert-circle',
		featured: 'mdi:star'
	};
</script>

<div
	class="bg-base-200 border-base-content/10 flex w-full flex-col rounded border transition hover:cursor-pointer hover:shadow-sm"
	transition:fade={{ delay: 100 }}
>
	<div class="relative">
		<img
			src={house.img ?? 'https://via.placeholder.com/1024x682?text=No+Image'}
			alt={'Photo of ' + house.title}
			class="aspect-[3/2] w-full rounded-t object-cover"
		/>
		<div class="badge badge-neutral absolute right-3 bottom-3 px-3 py-1 text-sm font-medium">
			${house.price?.toLocaleString() ?? 'N/A'}
		</div>

		<div class="absolute top-3 left-3 flex flex-wrap gap-1">
			{#each house.tags as tag}
				<span
					class={`badge ${tagColors[tag] ?? 'badge-neutral'} flex items-center gap-1 text-[0.65rem] uppercase tag_badge transform-gpu transition-all`}
				>
					<Icon icon={tagIcons[tag] ?? 'mdi:tag'} width="13" />
					<span class="hidden">
						{tag}
					</span>
				</span>
			{/each}
		</div>
	</div>

	<div class="text-base-content space-y-1 p-4 text-sm">
		<h2 class="truncate font-semibold">{house.title}</h2>
		<p class="text-base-content/60 truncate">{house.location}</p>
		<p class="text-base-content/70 mt-4 line-clamp-2">
			{house.description ?? 'No description available'}
		</p>
		<p class="text-base-content/50 text-xs">{house.category} • {house.type}</p>

		<div class="text-base-content/70 mt-4 flex flex-wrap gap-3">
			<span class="flex items-center gap-1">
				<Icon icon="mdi:bed" width="16" />
				{house.bed}
			</span>
			<span class="flex items-center gap-1">
				<Icon icon="mdi:bathtub" width="16" />
				{house.bath}
			</span>
			<span class="flex items-center gap-1">
				<Icon icon="mdi:ruler-square" width="16" />
				{house.sqft} sqft
			</span>
		</div>
	</div>

	<div class="border-base-content/10 flex flex-wrap justify-end border-t p-3 pt-3">
		{#each [{ icon: 'line-md:phone-call-loop', label: 'Phone' }, { icon: 'dashicons:email-alt', label: 'Email' }, { icon: 'streamline-ultimate:share-bold', label: 'Share' }] as btn}
			<button class="btn btn-xs btn-ghost text-base-content/70 flex items-center gap-1">
				<Icon icon={btn.icon} width="16" />
				{btn.label}
			</button>
		{/each}
	</div>
</div>

<style>
	.tag_badge:hover > span {
		display: block;
	}
</style>

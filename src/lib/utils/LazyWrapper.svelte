<script lang="ts">
	import { onMount } from 'svelte';

	let el: HTMLDivElement | null = $state(null);

	const { children } = $props();
	let isVisible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				isVisible = true;
			}
		});

		if (el) observer.observe(el);
		return () => {
			if (el) observer.unobserve(el);
			observer.disconnect();
		};
	});
</script>

{#if isVisible}
	{@render children()}
{:else}
	<div bind:this={el} class="relative h-100"></div>
{/if}

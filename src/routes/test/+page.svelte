<script lang="ts">
	import { tick } from 'svelte';

	let images = [
		'https://placehold.co/400x250?text=Image+1',
		'https://placehold.co/400x250?text=Image+2',
		'https://placehold.co/400x250?text=Image+3'
		//'https://placehold.co/400x250?text=Image+4',
		//'https://placehold.co/400x250?text=Image+5',
		//'https://placehold.co/400x250?text=Image+6'
	]; // try 1 image to see centered single

	let selectedIndex: number | null = null;
	let imageRefs: (HTMLImageElement | null)[] = [];

	let top = 0;
	let left = 0;
	let width = 0;
	let height = 0;

	let animating = false;

	function setImageRef(el: HTMLImageElement | null, i: number) {
		imageRefs[i] = el;
	}

	async function expand(index: number) {
		if (animating) return;
		const img = imageRefs[index];
		if (!img) return;

		const rect = img.getBoundingClientRect();

		top = rect.top;
		left = rect.left;
		width = rect.width;
		height = rect.height;

		selectedIndex = index;
		animating = true;

		await tick();

		const targetW = window.innerWidth * 0.9;
		const targetH = window.innerHeight * 0.9;
		const targetT = (window.innerHeight - targetH) / 2;
		const targetL = (window.innerWidth - targetW) / 2;

		requestAnimationFrame(() => {
			top = targetT;
			left = targetL;
			width = targetW;
			height = targetH;
		});

		setTimeout(() => (animating = false), 300);
	}

	function collapse() {
		if (selectedIndex === null) return;

		const img = imageRefs[selectedIndex];
		if (!img) return;

		const rect = img.getBoundingClientRect();

		top = rect.top;
		left = rect.left;
		width = rect.width;
		height = rect.height;

		animating = true;

		setTimeout(() => {
			selectedIndex = null;
			animating = false;
		}, 300);
	}
</script>

<div class="grid-container {images.length === 1 ? 'single' : ''}">
	{#each images as img, i (i)}
		<div class="grid-item">
			<img
				src={img}
				alt={'Image ' + (i + 1)}
				on:click={() => expand(i)}
				style="opacity: {selectedIndex === i ? 0 : 1}"
			/>
		</div>
	{/each}
</div>

{#if selectedIndex !== null}
	<div class="backdrop" on:click={collapse}></div>
	<img
		src={images[selectedIndex]}
		alt="expanded"
		class="expanded-img"
		style="top: {top}px; left: {left}px; width: {width}px; height: {height}px;"
		on:click={collapse}
	/>
{/if}

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: 150px;
		position: relative;
		gap: 0;
	}

	/* Center single element horizontally */
	.grid-container.single {
		grid-template-columns: 1fr;
		justify-items: center;
	}

	.grid-item {
		position: relative;
		overflow: visible;
	}

	.grid-item::after {
		content: '';
		position: absolute;
		top: -50%;
		bottom: -50%;
		right: 0;
		width: 2px;
		background-color: #ccc;
	}

	.grid-item::before {
		content: '';
		position: absolute;
		left: -50%;
		right: -50%;
		bottom: 0;
		height: 2px;
		background-color: #ccc;
	}

	.grid-item:nth-child(3n)::after {
		display: none;
	}

	.grid-item:nth-last-child(-n + 3)::before {
		display: none;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		border-radius: 6px;
		position: relative;
		z-index: 1;
		cursor: pointer;
		transition: opacity 0.3s ease;
	}

	.expanded-img {
		position: fixed;
		z-index: 1000;
		border-radius: 12px;
		object-fit: contain;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
		transition: all 0.3s ease;
		cursor: pointer;
		background: white;
	}

	.backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(2px);
		z-index: 900;
	}
</style>

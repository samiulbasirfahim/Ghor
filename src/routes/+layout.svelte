<script lang="ts">
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<header>
	<Navbar />
</header>
<main>
	{@render children()}
</main>
<footer></footer>

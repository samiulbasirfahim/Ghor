<script lang="ts">
	import { Footer, Navbar } from '$lib/components';
	import '../app.css';

	let { children } = $props();
</script>

<header class="sticky top-0 z-50">
	<Navbar />
</header>

<main class="container mx-auto px-4">
	{@render children()}
</main>
<footer>
	<Footer />
</footer>

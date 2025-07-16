<script lang="ts">
	import { Footer, Navbar } from '$lib/components';
	import '../app.css';

	let { children } = $props();
</script>

<header class="sticky top-0">
	<Navbar />
</header>

<main>
	{@render children()}
</main>
<footer>
	<Footer />
</footer>

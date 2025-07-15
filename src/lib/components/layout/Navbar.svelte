<script lang="ts">
	import Icon from '@iconify/svelte';

	let is_logged_in: boolean = $state(true);

	let links: { title: string; href: string }[] = [
		{ title: 'Buy', href: '/buy' },
		{ title: 'Rent', href: '/rent' },
		{ title: 'Commercial', href: '/commercial' },
		{ title: 'Plot', href: '/plot' }
	];
</script>

<nav class="navbar bg-base-300 px-8">
	<div class="navbar-start">LOGO</div>
	<ul class="navbar-center menu menu-horizontal gap-2">
		{#each links as { href, title }, i (i)}
			<li>
				<a class="btn btn-sm btn-ghost font-base text-base uppercase" {href}>{title}</a>
			</li>
		{/each}
	</ul>
	<ul class="navbar-end menu menu-horizontal gap-2">
		{#if is_logged_in}
			<li>
				<a href="" class="btn btn-sm btn-ghost text-base">POST</a>
			</li>
			<li>
				<a href="" class="btn btn-square btn-sm btn-ghost">
					<Icon icon="mdi:heart-outline" font-size="18" />
					<!-- mdi:heart -->
				</a>
			</li>
			<li>
				<a href="" class="btn btn-square btn-sm btn-ghost">
					<Icon icon="mdi:bell-notification-outline" font-size="18" />
					<!-- mdi:bell-notification -->
				</a>
			</li>

			<li class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-sm text-base bg-base-200  hover:bg-accent/40">
					<Icon icon="mdi:user-circle" font-size="18" />
					FAHIM
				</div>
				<ul
					tabindex="0"
					class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
				>
					<li><a>Item 1</a></li>
					<li><a>Item 2</a></li>
				</ul>
			</li>
		{:else}
			<li>
				<a href="">LOGIN</a>
			</li>
		{/if}
	</ul>
</nav>

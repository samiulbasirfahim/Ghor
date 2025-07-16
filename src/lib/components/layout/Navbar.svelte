<script lang="ts">
	import Icon from '@iconify/svelte';

	let is_logged_in: boolean = $state(true);

	let links: { title: string; href: string }[] = [
		{ title: 'Buy', href: '/houses?type=buy' },
		{ title: 'Rent', href: '/houses?type=rent' },
		{ title: 'Residencial', href: '/houses?category=residencial' },
		{ title: 'Commercial', href: '/houses?category=commercial' }
	];
</script>

{#snippet navLink({ title, href }: { title: string; href: string })}
	<li class="w-full">
		<a class="text-base" {href}>{title}</a>
	</li>
{/snippet}

<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<nav class="navbar bg-base-300 px-3 lg:px-8">
			<div class="navbar-start">LOGO</div>
			<ul class="navbar-center menu menu-horizontal hidden gap-2 lg:flex">
				{#each links as { href, title }, i (i)}
					<li>
						<a class="btn btn-sm btn-ghost font-base text-base uppercase" {href}>{title}</a>
					</li>
				{/each}
			</ul>
			<ul class="navbar-end menu menu-horizontal hidden gap-2 lg:flex">
				{#if is_logged_in}
					<li>
						<a href="#" class="btn btn-sm btn-ghost text-base">POST</a>
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
						<div
							tabindex="0"
							role="button"
							class="btn btn-sm bg-base-200 hover:bg-accent text-base"
						>
							<Icon icon="mdi:user-circle" font-size="18" />
							FAHIM
						</div>
						<ul
							tabindex="0"
							class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
						>
							<li><a>Profile</a></li>
							<li><a>My Properties</a></li>
							<li><a>Settings</a></li>
							<li><button>Log Out</button></li>
						</ul>
					</li>
				{:else}
					<li>
						<a href="">LOGIN</a>
					</li>
				{/if}
			</ul>

			<label for="my-drawer" class="drawer-button navbar-end lg:hidden">
				<Icon font-size="28" icon="mingcute:menu-fill" />
			</label>
		</nav>
	</div>
	<div class="drawer-side">
		<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-base-200 text-base-content min-h-full w-80 items-start justify-center p-4">
			{#each links as link, i (i)}
				{@render navLink(link)}
			{/each}
			<div class="border-b-base-content/30 my-2 w-full border-b-2"></div>
			{@render navLink({ href: '#', title: 'My Properties' })}
			{@render navLink({ href: '#', title: 'Saved Properties' })}
			{@render navLink({ href: '#', title: 'Notification' })}
			<div class="border-b-base-content/30 my-2 w-full border-b-2"></div>
			{@render navLink({ href: '#', title: 'Profile' })}
			{@render navLink({ href: '#', title: 'Settings' })}
			{@render navLink({ href: '#', title: 'Log out' })}
		</ul>
	</div>
</div>

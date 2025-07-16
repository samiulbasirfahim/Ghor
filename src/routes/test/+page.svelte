<script lang="ts">
	interface Filters {
		type: string[];
		category: string[];
		location: string[];
	}

	let filters: Filters = $state({});
</script>

<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/todos.json');
		if (res.ok) {
			const { file } = await res.json();
			return { props: { file } };
		}
	};
</script>

<script>
	import QuotesManager from "./QuotesManager.svelte";
	export let file
</script>

<QuotesManager />
<div class="todos">
	<!-- <Todos {todos}/> -->
</div>
<script context="module">
	// export const load = async ({ fetch }) => {
	// 	const res = await fetch(`/todos.dgraph.json`);
    //     // console.log(`🚀 ~ file: todos index.svelte ~ line 4 ~ load ~ res`, res)
	// 	if (res.ok) {
	// 		const { todos } = await res.json();
	// 		return { props: { todos } };
	// 	}
	// };
	export const load = async ({ fetch }) => {
		const res1 = await fetch(`/todos.dgraph.json`);
		const res2 = await fetch(`/todos.supabase.json`);
		if (res1.ok || res2.ok) {
			const { dgraph_todos } = await res1.json();
            console.log(`🚀 ~ file: index.svelte ~ line 16 ~ load ~ dgraph_todos`, dgraph_todos)
			const { supabase_todos } = await res2.json();
            console.log(`🚀 ~ file: index.svelte ~ line 18 ~ load ~ supabase_todos`, supabase_todos)
			return { props: { dgraph_todos, supabase_todos } };
		}
	};
</script>

<script>
	import {page} from '$app/stores'
import SingleInput from '$components/SingleInput.svelte';
import TodoInput from '$components/TodoInput.svelte';

    console.log(`🚀 ~ file: index.svelte ~ line 25 ~ page`, $page)
	import Todos from "$components/Todos.svelte";
	export let todos, dgraph_todos, supabase_todos
    console.log(`🚀 ~ file: index.svelte ~ line 29 ~ todos, dgraph_todos, supabase_todos`, todos, dgraph_todos, supabase_todos)
    // console.log(`🚀 ~ file: TODOS index.svelte ~ line 15 ~ todos`, todos)
</script>

<div class="flex mt-10">
	<div class="flex flex-col">
		<h1 class="ml-4 text-4xl font-bold text-cyan-400">DGRAPH</h1>
		<span class="mb-5"></span>
		<SingleInput />
		<span class="mb-5"></span>
		<Todos todos={dgraph_todos}  />
	</div>
	<div class="flex flex-col">
		<h1 class="ml-4 text-4xl font-bold text-cyan-400">SUPABASE</h1>
		<span class="mb-5"></span>
		<SingleInput />
		<span class="mb-5"></span>
		<Todos todos={supabase_todos}  />
	</div>
</div>

<style lang="scss">

</style>
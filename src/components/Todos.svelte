<script>
	export let todos;
</script>

<svelte:head>
	<title>Mike's Blog</title>
</svelte:head>
{#if todos}
	{#each todos as todo}
		<main class="w-full mx-auto px-4 my-2">
			<div class="text-center shadow-2xl">
				<!-- <figure class="px-10 pt-10">
				<img class="rounded-xl" src="{coverImage.url}" alt="{`Cover image for ${title}`}"> 
				</figure> -->
				<div class="bg-gray-900 m-0 p-2 rounded">
					{#if todo.body}<h1 class="title">{todo.body}</h1>{/if}
					{#if todo.quoteBody}<h1 class="title">{todo.quoteBody}</h1>{/if}
					{#if todo.author}<p>{todo.author.name}</p>{/if}
					{#if todo.created}<p>{todo.created}</p>{/if}
					{#if todo.id}<p>{todo.id}</p>{/if}
					{#if todo.tags}
						<div class="flex justify-center mt-5 space-x-2">
							{#each todo.tags as tag}
								<div class="badge badge-primary">{tag.tag}</div>
							{/each}
						</div>
					{/if}
					<div class="justify-center card-actions">
						<!-- <a href={`/posts/${slug}`} class="btn btn-primary btn-outline">Read &rArr</a> -->
					</div>
				</div>
			</div>
		</main>
	{/each}
{/if}

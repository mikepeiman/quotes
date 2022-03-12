<script context="module">
	// export const load = async ({ fetch }) => {
	// 	const res = await fetch('/quotes.dgraph.json');
	// 	// console.log(`🚀 ~ file: quotes AddQuote component ~ line 4 ~ load ~ res`, res)
	// 	if (res.ok) {
	// 		const { quotes } = await res.json();
	// 		console.log(`🚀 ~ file: index.svelte ~ line 7 ~ load ~ quotes`, quotes);
	// 		return { props: { quotes } };
	// 	}
	// };
</script>

<script>
	import { addQuote, uploadQuote } from '$stores/quotes.js';
	import { onMount } from 'svelte';
	import { gql, request } from 'graphql-request';
	import { client } from '$lib/dgraph-client';
	export let quotes, dgraph_quotes;
	let quoteBody, authorName, authorTitle, context, tags, source, originalText;
	const handleSubmit = () => {
		originalText = `${quoteBody} - ${authorName}, ${authorTitle} @(${context}), #(${tags}), [${source}]`;
		tags ? (tags = tags.split(',').map((tag) => tag.trim())) : null;
		console.log(`🚀 ~ file: AddQuote.svelte ~ line 14 ~ handleSubmit ~ tags`, tags);
		let quote = {
			originalText,
			quoteBody,
			authorName,
			authorTitle,
			context,
			tags,
			source
		};
		addQuote(quote);
		uploadQuote(quote);
	};

	onMount(() => {
		// console.log(`🚀 ~ file: AddQuote.svelte ~ line 42 ~ onMount ~ quotes`, quotes);
		// quotes.forEach(quote => {
		//   addQuote(quote);
		// });
	});

	function endpoint() {
		const fire = async () => {
			const res = await fetch('/quotes.dgraph.json');
			console.log(`🚀 ~ file: AddQuote.svelte ~ line 46 ~ fire ~ res`, res);

			if (res.ok) {
				const { dgraph_quotes } = await res.json();
				console.log(`🚀 ~ file: AddQuote.svelte ~ line 53 ~ load ~ dgraph_quotes`, dgraph_quotes);
				dgraph_quotes.forEach((quote) => {
					// console.log(`🚀 ~ file: AddQuote.svelte ~ line 73 ~ endpoint ~ quote`, quote)
					addQuote(quote);
				});
				return { props: { dgraph_quotes } };
			}
		};
		fire();
	}
</script>

<div class="p-10 card bg-base-200 w-full">
	<div class="form-control flex">
		<label class="label w-full">
			<span>Quote</span>
		</label>
		<input
			type="text"
			placeholder="Quote"
			class="input input-group max-w-xs"
			bind:value={quoteBody}
		/>
		<label class="label">
			<span class="label-text">Author Name</span>
		</label>
		<input type="text" placeholder="Author" class="input" bind:value={authorName} />
		<label class="label">
			<span class="label-text">Author Title</span>
		</label>
		<input type="text" placeholder="Author" class="input" bind:value={authorTitle} />
		<label class="label">
			<span class="label-text">Context</span>
		</label>
		<input type="text" placeholder="Context" class="input" bind:value={context} />
		<label class="label">
			<span class="label-text">Tags</span>
		</label>
		<input type="text" placeholder="Tags" class="input" bind:value={tags} />
		<label class="label">
			<span class="label-text">Source</span>
		</label>
		<input type="text" placeholder="Source" class="input" bind:value={source} />
		<div class="flex">
			<button
				type="submit"
				class="grow p-3 mx-1 rounded bg-ceruleanblue-800 hover:bg-ceruleanblue-700 mt-4"
				on:click={handleSubmit}>Add to Dgraph</button
			>
			<button
				type="submit"
				class="grow p-3 mx-1 rounded bg-fuchsia-800 hover:bg-fuchsia-700 mt-4"
				on:click={handleSubmit}>Add to Supabase</button
			>
			<button
				type="submit"
				class="grow p-3 mx-1 rounded bg-green-800 hover:bg-green-700 mt-4"
				on:click={handleSubmit}>Add to EdgeDB</button
			>
			<button
				type="submit"
				class="grow p-3 mx-1 rounded bg-orange-800 hover:bg-orange-700 mt-4"
				on:click={handleSubmit}>Add to Redis</button
			>
			<button
				type="submit"
				class="grow p-3 mx-1 rounded bg-cyan-800 hover:bg-cyan-700 mt-4"
				on:click={handleSubmit}>Add to TypeDB</button
			>
		</div>
	</div>
</div>

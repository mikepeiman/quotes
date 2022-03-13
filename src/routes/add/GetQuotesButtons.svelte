<!-- 
This is a test quote.
It makes use of auto-expanding textarea.
I appreciate the code someone else wrote for this.
It works great.
I just need to hide the scrollbars - oh, the tailwindCSS class worked.
Great!
 -->
<script>
	import { addQuote, uploadQuote, storeCurrentQuote } from '$stores/quotes.js';
	import { onMount } from 'svelte';
	import { gql, request } from 'graphql-request';
	import { dgraph } from '$lib/dgraphClient';

	import TextareaAutoResize from '$lib/textAreaAutoResize.js';
	let textareaElements;
	export let quotes, dgraph_quotes;
	let quoteBody, authorName, authorTitle, context, tags, source, originalText;
	const handleSubmit = (db) => {
		console.log(`🚀 ~ file: index.svelte ~ line 21 ~ handleSubmit clicked 💎💎💎~ db`, db);
		originalText = `${quoteBody} - ${authorName}, ${authorTitle} @(${context}), #(${tags}), [${source}]`;
		tags ? (tags = tags.split(',').map((tag) => tag.trim())) : null;
		// console.log(`🚀 ~ file: AddQuote.svelte ~ line 14 ~ handleSubmit ~ tags`, tags);
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
		// uploadQuote(quote);
	};

	function updateCurrentQuote() {
		console.log(
			`🚀 ~ file: AddQuote.svelte ~ line 32 ~ updateCurrentQuote ~ originalText`,
			originalText
		);
		let currentQuote = {
			originalText,
			quoteBody,
			authorName,
			authorTitle,
			context,
			tags,
			source
		};
		storeCurrentQuote.set(currentQuote);
	}
	$: quoteBody, authorName, authorTitle, context, tags, source;
	onMount(() => {
		textareaElements = document.querySelectorAll('textarea');
		console.log(`🚀 ~ file: index.svelte ~ line 44 ~ textareaElements`, textareaElements);
		for (const textareaElement of textareaElements) {
			new TextareaAutoResize(textareaElement);
		}

		checkIfCurrentQuoteExistsAndPopulateForm();

		// console.log(`🚀 ~ file: AddQuote.svelte ~ line 42 ~ onMount ~ quotes`, quotes);
		// quotes.forEach(quote => {
		//   addQuote(quote);
		// });
	});

	function checkIfCurrentQuoteExistsAndPopulateForm() {
		let q = JSON.parse(storeCurrentQuote.get());
		console.log(
			`🚀 ~ file: index.svelte ~ line 69 ~ checkIfCurrentQuoteExistsAndPopulateForm ~ q `,
			q
		);
		let fieldQuoteBody = document.getElementById('quoteBody');
		let fieldAuthorName = document.getElementById('authorName');
		let fieldAuthorTitle = document.getElementById('authorTitle');
		let fieldContext = document.getElementById('context');
		let fieldTags = document.getElementById('tags');
		let fieldSource = document.getElementById('source');
		for (const property in q) {
			if (q.hasOwnProperty(property)) {
				if (property === 'quoteBody') {
					fieldQuoteBody.value = quoteBody = q[property];
				} else if (property === 'authorName') {
					fieldAuthorName.value = authorName = q[property];
				} else if (property === 'authorTitle') {
					fieldAuthorTitle.value = authorTitle = q[property];
				} else if (property === 'context') {
					fieldContext.value = context = q[property];
				} else if (property === 'tags') {
					fieldTags.value = tags = q[property];
				} else if (property === 'source') {
					fieldSource.value = source = q[property];
				}
			}
		}
		for (const textareaElement of textareaElements) {
			new TextareaAutoResize(textareaElement);
		}
	}

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


	<div class="flex items-stretch justify-evenly">
		<button
			type="submit"
			class="grow p-3 mx-1 rounded bg-orangeyellow-800 hover:bg-orangeyellow-700 mt-4"
			on:click={() => handleSubmit('local')}>Get from local stores</button
		>
		<button
			type="submit"
			class="grow p-3 mx-1 rounded bg-ceruleanblue-800 hover:bg-ceruleanblue-700 mt-4"
			on:click={() => handleSubmit('dgraph')}>Get from Dgraph</button
		>
		<button
			type="submit"
			class="grow p-3 mx-1 rounded bg-fuchsia-800 hover:bg-fuchsia-700 mt-4"
			on:click={() => handleSubmit('supabase')}>Get from Supabase</button
		>
		<button
			type="submit"
			class="grow p-3 mx-1 rounded bg-green-800 hover:bg-green-700 mt-4"
			on:click={() => handleSubmit('edgedb')}>Get from EdgeDB</button
		>
		<button
			type="submit"
			class="grow p-3 mx-1 rounded bg-orange-800 hover:bg-orange-700 mt-4"
			on:click={() => handleSubmit('redis')}>Get from Redis</button
		>
		<button
			type="submit"
			class="grow p-3 mx-1 rounded bg-cyan-800 hover:bg-cyan-700 mt-4"
			on:click={() => handleSubmit('typedb')}>Get from TypeDB</button
		>
	</div>


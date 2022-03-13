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
	let textareaElements
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
		console.log(`🚀 ~ file: AddQuote.svelte ~ line 32 ~ updateCurrentQuote ~ originalText`, originalText);
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
$: quoteBody, authorName, authorTitle, context, tags, source
	onMount(() => {

			textareaElements = document.querySelectorAll('textarea');
            console.log(`🚀 ~ file: index.svelte ~ line 44 ~ textareaElements`, textareaElements)
			for (const textareaElement of textareaElements) {
				new TextareaAutoResize(textareaElement);
			}

			checkIfCurrentQuoteExistsAndPopulateForm()

		// console.log(`🚀 ~ file: AddQuote.svelte ~ line 42 ~ onMount ~ quotes`, quotes);
		// quotes.forEach(quote => {
		//   addQuote(quote);
		// });
	});

	function checkIfCurrentQuoteExistsAndPopulateForm() {
		let q = JSON.parse(storeCurrentQuote.get())
        console.log(`🚀 ~ file: index.svelte ~ line 69 ~ checkIfCurrentQuoteExistsAndPopulateForm ~ q `, q )
		let fieldQuoteBody = document.getElementById('quoteBody');
		let fieldAuthorName = document.getElementById('authorName');
		let fieldAuthorTitle = document.getElementById('authorTitle');
		let fieldContext = document.getElementById('context');
		let fieldTags = document.getElementById('tags');
		let fieldSource = document.getElementById('source');
		for(const property in q) {
			if(q.hasOwnProperty(property)) {
				if(property === 'quoteBody') {
					fieldQuoteBody.value = quoteBody = q[property];
				} else if(property === 'authorName') {
					fieldAuthorName.value = authorName = q[property];
				} else if(property === 'authorTitle') {
					fieldAuthorTitle.value = authorTitle = q[property];
				} else if(property === 'context') {
					fieldContext.value = context = q[property];
				} else if(property === 'tags') {
					fieldTags.value = tags = q[property];
				} else if(property === 'source') {
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

<div class="p-10 card bg-slate-800 w-full items-center">
	<div class="form-control flex  max-w-[600px] w-[600px]">
		<label class="label w-full">
			<span>Quote</span>
		</label>
		<textarea
			type="text"
			id="quoteBody"
			placeholder="Quote"
			class="input input-group h-auto overflow-hidden"
			bind:value={quoteBody}
			on:change={updateCurrentQuote}
		/>

		<label class="label">
			<span class="label-text">Author Name</span>
		</label>
		<input on:change={updateCurrentQuote} id="authorName" type="text" placeholder="Author" class="input" bind:value={authorName} />
		<label class="label">
			<span class="label-text">Author Title</span>
		</label>
		<input on:change={updateCurrentQuote} id="authorTitle" type="text" placeholder="Author" class="input" bind:value={authorTitle} />
		<label class="label">
			<span class="label-text">Context</span>
		</label>
		<input on:change={updateCurrentQuote} id="context" type="text" placeholder="Context" class="input" bind:value={context} />
		<label class="label">
			<span class="label-text">Tags</span>
		</label>
		<input on:change={updateCurrentQuote} id="tags" type="text" placeholder="Tags" class="input" bind:value={tags} />
		<label class="label">
			<span class="label-text">Source</span>
		</label>
		<input on:change={updateCurrentQuote} id="source" type="text" placeholder="Source" class="input" bind:value={source} />
	</div>
</div>

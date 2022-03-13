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

import DisplayQuotes from '../DisplayQuotes.svelte';
import QuotesManager from '../QuotesManager.svelte';
import GetQuotes from './GetQuotesButtons.svelte';
import QuotesStorageControls from './QuotesStorageControls.svelte';
import AddQuoteForm from './AddQuoteForm.svelte';
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

	});

</script>
<div class="flex flex-col bg-red-500">
	<AddQuoteForm />
	<QuotesStorageControls />
</div>
<QuotesManager />
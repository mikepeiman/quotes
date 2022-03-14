<script>
	import { addQuote, uploadQuote, storeCurrentQuote } from '$stores/quotes.js';
	import { onMount } from 'svelte';
	import AddQuote from '../AddQuote.svelte';
	import AddQuoteButtons from './AddQuoteButtons.svelte';
	import GetQuotesButtons from './GetQuotesButtons.svelte';
	import GetQuotes from './GetQuotesButtons.svelte';
	export let quote;
</script>

<div class="p-10 card bg-slate-800 w-full">
	<GetQuotesButtons />
	<AddQuoteButtons />
</div>

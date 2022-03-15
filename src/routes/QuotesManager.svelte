<script>
	import {
		storedQuotesFile,
		quotesArray,
		addedQuotes,
		storedFileContent,
		storedQuotesArray,
		getAllQuotesFromDB
	} from '$stores/quotes.js';
	import { onMount } from 'svelte';
	import DisplayQuotes from './DisplayQuotes.svelte';
	import { parse } from './parseQuotes.js';

	import { page } from '$app/stores';
import AddQuoteForm from './add/AddQuoteForm.svelte';

	export let filteredQuotes = [];

	let addQuoteForm = false;
	let input_file = [];
	let contents = '', multiLineQuote = 0;
	let quotes = [];
	let searchTerm = '';
	let quotesArrays = [];
	let fsFileContent,
		fsQuotesArray,
		dbQuotes,
		file = false;
	$: if ($quotesArray.length) {
		filteredQuotes = [...$addedQuotes, ...$quotesArray];
	} else if (fsQuotesArray) {
		filteredQuotes = quotes = JSON.parse(fsQuotesArray);
		console.log(`🚀 ~ file: QuotesManager.svelte ~ line 30 ~ fsQuotesArray TRUE `, filteredQuotes);
		storedQuotesArray.set([...$addedQuotes, ...quotes]);
		filteredQuotes = [...$addedQuotes, ...$quotesArray];
	} else {
		if (fsFileContent) {
			parseFile(fsFileContent);
		} else {
			// getQuotesFromDgraph()
			if (dbQuotes) {
				console.log(`🚀 ~ file: QuotesManager.svelte ~ line 48 ~ dbQuotes TRUE`, dbQuotes);
				storedQuotesArray.set(dbQuotes.body.dgraph_quotes);
				filteredQuotes = dbQuotes.body.dgraph_quotes;
			}
		}
	}

	async function getQuotesFromDgraph() {
		dbQuotes = await getAllQuotesFromDB();
		quotesArray.set(dbQuotes.body.dgraph_quotes);
	}

	$: {
		filteredQuotes = [...$addedQuotes, ...$quotesArray];
		if (searchTerm) {
			console.log(`🚀 ~ file: QuotesManager.svelte ~ line 80 ~ searchTerm TRUE`, searchTerm);
			filteredQuotes = quotes.filter(
				(quote) =>
					quote.quoteBody.toLowerCase().includes(searchTerm.toLowerCase()) ||
					quote.author.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredQuotes = [...$addedQuotes, ...$quotesArray];
		}
	}
	onMount(async () => {
		fsFileContent = localStorage.getItem('fileContent');
		// console.log(`🚀 ~ file: QuotesManager.svelte ~ line 64 ~ onMount ~ fsFileContent`, fsFileContent);
		fsQuotesArray = localStorage.getItem('quotesArray');

		// dbQuotes = await getAllQuotesFromDB();
		// quotesArray.set(dbQuotes.body.dgraph_quotes);
        console.log(`🚀 ~ file: QuotesManager.svelte ~ line 74 ~ onMount ~ $quotesArray`, $quotesArray)
		console.log(`🚀 ~ file: QuotesManager.svelte ~ line 66 ~ onMount ~ fsQuotesArray`, fsQuotesArray);
		// $quotesArray.forEach((quote) => {
		// 	uploadQuote(quote, "addQuote")
		// });
		console.log(`🚀 ~ file: QuotesManager.svelte ~ line 88 ~ onMount ~ page`, $page);
		console.log(`🚀 ~ file: QuotesManager.svelte ~ line 88 ~ onMount ~ page`, $page.url);
	});

	function uploadQuote(quote, operationType) {
		console.log(
			`🚀 ~ file: DisplayQuotes.svelte ~ line 44 ~ uploadQuote ~ operationType ${operationType}, quote`,
			quote
		);
		const fire = async () => {
			try {
				// const res = await fetch(`/quotes.dgraph.getQuote.json?data=${JSON.stringify(id)}`);
				const res = await fetch(
					`/quotes.dgraph.getQuote?data=${JSON.stringify(quote)}&queryType="${operationType}"`
				);
				console.log(`🚀 ~ file: DisplayQuotes.svelte ~ line 24 ~ fire ~ res`, res);
				if (res.ok) {
					const { dgraph_quotes } = await res.json();
					console.log(`🚀 ~ file: AddQuote.svelte ~ line 53 ~ load ~ dgraph_quotes`, dgraph_quotes);
					return { props: { dgraph_quotes } };
				}
			} catch (error) {
				console.log(`🚀 ~ DisplayQuotes called getQuote.json endpoint: error`, error);
				return {
					body: { error: 'There was a server error' }
				};
			}
		};
		fire();
	}

	function readFile(input_file) {
		if (input_file) {
			console.log(
				`🚀 ~ file: QuotesManager.svelte ~ line 14 ~ readFile ~ input_file`,
				input_file[0]
			);
			file = input_file[0];
			var reader = new FileReader();
			reader.onload = function (event) {
				contents = event.target.result;
				console.log('Successfully read file');
				storedFileContent.set(contents);
				parseFile(contents);
			};
			reader.onerror = function (err) {
				console.error('Failed to read file', err);
			};
			reader.readAsText(file);
		}
	}

	function parseFile(doc) {
		const parser = new DOMParser();
		const htmlDoc = parser.parseFromString(doc, 'text/html');
		let divs = htmlDoc.getElementsByTagName('div');
		quotesArrays = isolateQuotationBlocks(divs);
		for (let i = 0; i < quotesArrays.length; i++) {
			// if (i === 414 || i === 415 || i === 416 || i === 417 || i === 421 || i === 422) {
			// if (i === 145  || i === 146 ) {
			// if (i === 26  ) {
			// for (let i = 43; i < 57; i++) {
			// look at 201, niemoller, with <br> at end
			// look at 206 with the long context "oft quoted as"
			// look at 262, @yeebingeebin
			// check on 570, samurai carpenter, see if tags are corrected
			// 620, tags knowledge management in paranethesis
			// for (let i = 16; i < 22; i++) {
			// for (let i = 58; i < 71; i++) {
			// 54-64 gives the meical journal quotes
			let item = stringifyArray(quotesArrays[i]);
			if (item.includes('\\r') || item.includes('\\n')) {
				item = item.replace(/(\\r\\n|\\n|\\r)/gm, '');
			}
			let workingQuoteObject = {};
			workingQuoteObject['originalText'] = workingQuoteObject['remainingText'] = item;
			workingQuoteObject['details'] = [];
			workingQuoteObject['author'] = {
				name: '',
				title: ''
			};
			workingQuoteObject['authorTitle'] = [];
			workingQuoteObject['title'] = '';
			workingQuoteObject['tags'] = [];
			workingQuoteObject['sources'] = [];
			workingQuoteObject = parse(workingQuoteObject);
			quotes = [...quotes, workingQuoteObject];
		}
		// }

		storedQuotesArray.set(quotes);
		// saveFile(quotes, "quotes.json")
	}

	function isolateQuotationBlocks(divs) {
		let quoteArray = [];
		for (let i = 0; i < divs.length; i++) {
			let div = divs[i];
			if (div.innerText.length > 5) {
				multiLineQuote++;
				quoteArray = [...quoteArray, div.innerText];
			} else {
				quotesArrays = [...quotesArrays, quoteArray];
				multiLineQuote = 0;
				quoteArray = [];
			}
		}
		return quotesArrays;
	}

	function stringifyArray(item) {
		let tempString = '';
		if (item.length > 1) {
			item.forEach((subItem) => {
				tempString += `${subItem}<br>`;
			});
			return tempString;
		} else {
			tempString = '';
			return item[0];
		}
	}

	function showAddQuoteForm() {
		addQuoteForm = true;
	}

	function getDgraphQuotes() {
		const fire = async () => {
			try {
				// const res = await fetch(`/quotes.dgraph.getQuote.json?data=${JSON.stringify(id)}`);
				const res = await fetch(`/quotes.dgraph.getQuote?queryType="getAllQuotes"`);
				console.log(`🚀 ~ file: DisplayQuotes.svelte ~ line 24 ~ fire ~ res`, res);
				if (res.ok) {
					const { dgraph_quotes } = await res.json();
					console.log(`🚀 ~ file: AddQuote.svelte ~ line 53 ~ load ~ dgraph_quotes`, dgraph_quotes);
					return { props: { dgraph_quotes } };
				}
			} catch (error) {
				console.log(`🚀 ~ DisplayQuotes called getQuote.json endpoint: error`, error);
				return {
					body: { error: 'There was a server error' }
				};
			}
		};
		fire();
	}

	function addQuotesToDgraph() {
		const fire = async () => {
			try {
				// const res = await fetch(`/quotes.dgraph.getQuote.json?data=${JSON.stringify(id)}`);
				const res = await fetch(
					`/quotes.dgraph.getQuote?data=${JSON.stringify(filteredQuotes)}?queryType="addManyQuotes"`
				);
				console.log(`🚀 ~ file: DisplayQuotes.svelte ~ line 24 ~ fire ~ res`, res);
				if (res.ok) {
					const { dgraph_quotes } = await res.json();
					console.log(`🚀 ~ file: AddQuote.svelte ~ line 53 ~ load ~ dgraph_quotes`, dgraph_quotes);
					return { props: { dgraph_quotes } };
				}
			} catch (error) {
				console.log(`🚀 ~ DisplayQuotes called getQuote.json endpoint: error`, error);
				return {
					body: { error: 'There was a server error' }
				};
			}
		};
		fire();
	}
</script>

<div class=" quotes-wrapper flex flex-col w-full bg-black">
	<div class="file-and-search-wrapper flex items-start  justify-center mt-12">
		{#if $page.url.pathname !== '/'}
			<div class="fileinput-wrapper ml-12">
				<input
					class="input input-primary w-48 p-0 border-2 border-indigo-600"
					id="fileInput"
					type="file"
					bind:files={input_file}
					on:change={readFile(input_file)}
				/>
			</div>
		{/if}
		<div class="flex w-full items-center justify-center m-0 ml-8">
			<input
				type="text"
				id="filterTextBar"
				placeholder="Search quotes"
				class="w-5/6 input input-primary rounded-md text-lg p-4 border-2 border-indigo-600 active:border-sky-300"
				bind:value={searchTerm}
			/>
		</div>
	</div>
	<div class="flex w-full">
		{#if $page.url.pathname !== '/'}
			{#if addQuoteForm}
			<AddQuoteForm />
			{:else}
				<button class="p-4 rounded bg-indigo-600 m-3" on:click={showAddQuoteForm}
					>Add New Quote</button
				>
			{/if}
		{/if}
	</div>

	<div class="quotes">
		{#if filteredQuotes.length}
			{#each filteredQuotes as quote, i}
				{#if quote.quoteBody}
					<DisplayQuotes {quote} {i} />
				{/if}
			{/each}
		{:else if $quotesArray.length || $addedQuotes.length}
			No results include that search term
		{:else}
			loading...
		{/if}
	</div>
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Allura&family=Bad+Script&family=Coda:wght@400;800&family=Dancing+Script&family=Forum&family=Gideon+Roman&family=Great+Vibes&family=Karla:ital,wght@0,200;0,300;1,200;1,300&family=Lemonada:wght@300;400;500&family=Lobster&family=Merriweather:ital,wght@0,300;1,300&family=Monoton&family=Montserrat:ital,wght@0,100;0,300;0,500;0,800;1,100;1,300;1,500;1,800&family=Outfit:wght@200;500&family=Overlock:ital,wght@0,400;0,700;1,400;1,700&family=Staatliches&display=swap');

	.quotes-wrapper {
		background: #122334;
	}

	input#fileInput {
		position: relative;
		padding: 2.9rem 0 0 0;
		height: 0px;
		overflow: hidden;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		background: url('https://cdn1.iconfinder.com/data/icons/hawcons/32/698394-icon-130-cloud-upload-256.png')
			center center no-repeat;
		border-radius: 0.5rem;
		background-size: 3rem;
		cursor: pointer;
		:before {
			content: 'Upload HTML file';
			font-size: 2rem;
			color: white;
			height: 3rem;
			width: 12rem;
			position: absolute;
			top: 0;
			left: 50%;
			transform: translate(-50%, -25px);
		}
	}

	.quotes {
		font-family: 'Merriweather', serif;
		font-weight: 300;
	}

	.quote-author {
		color: rgba(100, 200, 255, 1);
	}

	.quote-mark {
		font-family: 'Montserrat', serif;
		font-size: 125%;
		font-weight: 300;
		font-weight: 100;
		font-family: 'Coda', cursive;
	}
	.badge {
		font-family: 'Montserrat', sans-serif;
		font-weight: normal;
	}

	.quoteBody {
		padding: 1rem;
		font-family: 'Merriweather', serif;
		font-family: 'Karla', sans-serif;
		font-size: 175%;
		font-weight: 300;
		border-radius: 5px 5px 5px 0;
	}

	.input-group > span {
		border-radius: 0;
	}
</style>

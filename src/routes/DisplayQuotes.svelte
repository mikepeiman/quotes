<script>
	export let quote, i;
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { deleteQuote } from '$stores/quotes';
	import DisplayQuotesEdit from './DisplayQuotesEdit.svelte';
	import { fade, blur, fly, slide, scale, crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

	let icons = {
		edit: 'akar-icons:edit',
		question: 'akar-icons:question',
		upload: 'ant-design:cloud-upload-outlined',
		upsert: 'clarity:upload-outline-d',
		delete: 'fluent:delete-dismiss-20-filled',
		star: 'clarity:star-solid'
	};

	let edit = false,
		hover = false;

	const handleEdit = (i) => {
		console.log(`edit ${i}`);
		edit = !edit;
		console.log(`🚀 ~ file: DisplayQuotes.svelte ~ line 3 ~ quote`, quote);
		// query all quote elements with ids
		let thisQuote = document.getElementById(`${quote.id}`);
		console.log(`🚀 ~ file: DisplayQuotes.svelte ~ line 45 ~ handleEdit ~ thisQuote`, thisQuote);
		let quote_elements = thisQuote.querySelectorAll('.quote-info');
		edit ? injectInputFields(quote_elements) : replaceQuoteDetails(quote_elements);
	};

	const injectInputFields = (quote_elements) => {
		quote_elements.forEach((quote_element) => {
			let inputEl = document.createElement('input');
			inputEl.style.margin = `.5rem`;
			inputEl.style.border = `none`;
			inputEl.style.background = `none`;
			inputEl.style.color = `var(--color-cyan-200)`;
			inputEl.style.outline = `none`;
			inputEl.style.borderBottom = `1px solid var(--color-cyan-200)`;
			inputEl.style.fontSize = `1rem`;
			inputEl.classList.add('quote-info');
			inputEl.id = quote_element.id;
			inputEl.value = quote_element.innerText;
			quote_element.parentNode.replaceChild(inputEl, quote_element);
			console.log(`🚀 ~ file: DisplayQuotes.svelte ~ line 6 ~ quote_element`, quote_element);
			console.log(
				`🚀 ~ file: DisplayQuotes.svelte ~ line 6 ~ quote_element.value`,
				quote_element.value
			);
			console.log(`🚀 ~ file: DisplayQuotes.svelte ~ line 6 ~ quote_element.id`, quote_element.id);
			// quote_element.animate(
			// 	{
			// 		opacity: 0
			// 	},
			// 	{
			// 		duration: 300,
			// 		easing: 'ease-in-out'
			// 	}
			// );
		});
	};

	const replaceQuoteDetails = (quote_elements) => {
		quote_elements.forEach((quote_element) => {
			console.log(`🚀 ~ file: DisplayQuotes.svelte ~ line 78 ~ quote_element`, quote_element);
			console.log(
				`🚀 ~ file: DisplayQuotes.svelte ~ line 78 ~ quote_element.value`,
				quote_element.value
			);
			console.log(`🚀 ~ file: DisplayQuotes.svelte ~ line 78 ~ quote_element.id`, quote_element.id);
			let spanEl = document.createElement('span');
			spanEl.style.color = `var(--color-sky-200)`;
			quote_element.id.includes('authorName')
				? (spanEl.style.color = `var(--color-sky-300)`)
				: null;
			quote_element.id.includes('authorTitle')
				? (spanEl.style.color = `var(--color-sky-400)`)
				: null;
			quote_element.id.includes('date') ? (spanEl.style.color = `var(--color-slate-300)`) : null;
			quote_element.id.includes('source') ? (spanEl.style.color = `var(--color-sky-500)`) : null;
			quote_element.id.includes('tags') ? (spanEl.style.color = `var(--color-sky-600)`) : null;
			spanEl.style.margin = `0rem`;
			spanEl.style.border = `none`;
			spanEl.style.background = `none`;
			spanEl.innerText = quote_element.value;
			// spanEl.style.outline = `none`;
			// spanEl.style.borderBottom = `1px solid var(--color-cyan-200)`;
			spanEl.style.fontSize = `.75rem`;
			spanEl.classList.add('quote-info');
			spanEl.value = quote_element.innerText;
			quote_element.parentNode.replaceChild(spanEl, quote_element);
			// quote_element.animate(
			// 	{
			// 		opacity: 0
			// 	},
			// 	{
			// 		duration: 300,
			// 		easing: 'ease-in-out'
			// 	}
			// );
		});
	};

	const handleQuery = (i) => {
		console.log(`query ${i}`);
		console.log(`🚀 ~ file: DisplayQuotes.svelte ~ line 3 ~ quote`, quote);
		lookupQuote(quote.id ? quote.id : false);
	};

	function lookupQuote(id) {
		console.log(`🚀 ~ file: DisplayQuotes.svelte ~ line 21 ~ lookupQuote ~ id`, id);
		const fire = async () => {
			try {
				// const res = await fetch(`/quotes.dgraph.getQuote.json?data=${JSON.stringify(id)}`);
				const res = await fetch(
					`/quotes.dgraph.getQuote?data=${JSON.stringify(id)}&queryType="getQuoteById"`
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

	function deleteQ() {
		console.log(`🚀 ~ file: DisplayQuotes.svelte ~ line 78 ~ deleteQuote ~ quote, i`, quote, i);
		deleteQuote(quote);
	}

	function activateQuote() {
		console.log(
			`🚀 ~ file: DisplayQuotes.svelte ~ line 176 ~ activateQuote ~ activateQuote`,
			quote.quoteBody
		);
		quote.hasOwnProperty('active') ? (quote.active = !quote.active) : (quote.active = true);

		console.log(
			`🚀 ~ file: DisplayQuotes.svelte ~ line 179 ~ activateQuote ~ quote.active`,
			quote.active
		);
	}

	function hoverQuote() {
		hover = true;
	}
	function hoverOut() {
		hover = false;
	}
	function favoriteQuote() {
		'favorite' in quote ? (quote.favorite = !quote.favorite) : (quote.favorite = true);
		console.log(
			`🚀 ~ file: DisplayQuotes.svelte ~ line 192 ~ favoriteQuote ~ favoriteQuote: `,
			quote.favorite
		);
		quote.active = !quote.active;
	}
</script>

<div
	id={quote.id}
	transition:scale={{ duration: 100, easing: quintOut }}
	on:mouseenter={hoverQuote}
	on:mouseleave={hoverOut}
	class="p-3 m-12 shadow-lg border border-2 border-gray-800 rounded-sm bg-gradient-to-br from-transparent via-gray-900 rounded-xl
	hover:bg-gradient-to-br hover:border-sky-800 hover:from-electricpurple-900 transition-all hover:cursor-pointer
	{quote.active
		? 'border-orangeyellow-500 hover:border-orangeyellow-300 from-electricpurple-900'
		: 'border-gray-800'}"
	on:click={activateQuote}
>
	<div class="flex justify-between">
		<div class="count badge bg-gray-700">{i + 1}</div>
		<div class="flex">
				{#if $page.url.pathname !== '/'}
				<div class="edit-quote hover:cursor-pointer" on:click={() => handleQuery(i)}>
					<Icon
						icon={icons.question}
						class="w-8 h-8 ml-2 -mt-1 hover:text-sky-500 transition-all 
					{hover ? 'opacity-100' : 'opacity-0'}
					{quote.active ? 'opacity-100' : 'opacity-0'}"
					/>
				</div>
				<div class="edit-quote hover:cursor-pointer" on:click={() => handleEdit(i)}>
					<Icon
						icon={icons.edit}
						class="w-8 h-8 ml-2 -mt-1 hover:text-sky-500 transition-all 
					{hover ? 'opacity-100' : 'opacity-0'}
					{quote.active ? 'opacity-100' : 'opacity-0'}"
					/>
				</div>
				<div
					class="edit-quote hover:cursor-pointer"
					on:click={() => uploadQuote(quote, 'addQuote')}
				>
					<Icon
						icon={icons.upload}
						class="w-8 h-8 ml-2 -mt-1 hover:text-sky-500 transition-all 
				{hover ? 'opacity-100' : 'opacity-0'}
				{quote.active ? 'opacity-100' : 'opacity-0'}"
					/>
				</div>
				<div
					class="edit-quote hover:cursor-pointer"
					on:click={() => uploadQuote(quote, 'upsertQuote')}
				>
					<Icon
						icon={icons.upsert}
						class="w-8 h-8 ml-2 -mt-1 hover:text-sky-500 transition-all 
			{hover ? 'opacity-100' : 'opacity-0'}
			{quote.active ? 'opacity-100' : 'opacity-0'}"
					/>
				</div>
				<div class="edit-quote hover:cursor-pointer" on:click={() => deleteQ(quote, 'local')}>
					<Icon
						icon={icons.delete}
						class="w-8 h-8 ml-2 -mt-1 hover:text-sky-500 transition-all 
			{hover ? 'opacity-100' : 'opacity-0'}
			{quote.active ? 'opacity-100' : 'opacity-0'}"
					/>
				</div>
				{/if}
				<div class="edit-quote hover:cursor-pointer" on:click={favoriteQuote}>
					<Icon
						icon={icons.star}
						class="w-8 h-8 ml-2 -mt-1  hover:text-yellow-400 transition-all 
			{hover || quote.favorite ? 'opacity-100' : 'opacity-0'}
			{quote.active || quote.favorite ? 'opacity-100' : ''}
			{quote.favorite ? 'text-yellow-500 opacity-100' : ''}"
					/>
				</div>
			</div>
	</div>

	<h1 class="quote-body p-8 text-2xl">
		<span class="quote-mark text-sky-300" id="{quote.id}-quoteBody">&ldquo;</span
		>{@html quote.quoteBody}<span class="quote-mark text-sky-300">&rdquo;</span>
		<span class="quote-author text-sky-300" id="{quote.id}-quoteBody"
			>~ {quote.author?.name ? quote.author.name : quote.author}</span
		>
	</h1>
	<div class="flex flex-col justify-items-start place-items-start">
		<label class="quote-details">
			<span class="bg-custom">Author</span>
			<span class="quote-info bg-custom text-sky-300 " id="{quote.id}-authorName"
				>{quote.author.name ? quote.author.name : quote.author}</span
			>
		</label>
		{#if quote.author.title}
			<label class="quote-details">
				<span class="bg-custom">Title</span>
				<span class="quote-info  bg-custom text-sky-400 " id="{quote.id}-authorTitle"
					>{quote.author.title}</span
				>
			</label>
		{/if}
		{#if quote.date}
			<label class="quote-details">
				<span class="bg-custom rounded-none">Date</span>
				<span class="quote-info rounded-none bg-custom text-gray-400 " id="{quote.id}-date"
					>{quote.date}</span
				>
			</label>
		{/if}
		{#if quote.source}
			<label class="quote-details">
				<span class="bg-custom rounded-none">Source</span>
				<span class="quote-info rounded-none bg-custom text-sky-500 " id="{quote.id}-source"
					>{quote.source}</span
				>
			</label>
		{/if}
		{#if quote.tags?.length}
			<label class="quote-details">
				<span class="bg-custom rounded-none">Tags</span>
				<span class="quote-info p-0 rounded-none" id="{quote.id}-tags">
					{#each quote.tags as tag}
						<span class="rounded-sm bg-slate-700 mx-1 text-sky-500 p-1 ">{tag}</span>
					{/each}
				</span>
			</label>
		{/if}
		{#if quote.context}
			<label class="quote-details">
				<span class="bg-custom rounded-none">Context</span>
				<span class="quote-info rounded-none bg-custom text-sky-500 " id="{quote.id}-context"
					>{quote.context}</span
				>
			</label>
		{/if}
	</div>
</div>

<style lang="scss">
	.quote-details {
		display: grid;
		grid-template-columns: 8ch auto;
		width: 100%;
		font-size: 0.75rem;
		background: none;
		align-items: center;
	}
	// @import url('https://fonts.googleapis.com/css2?family=Allura&family=Bad+Script&family=Coda:wght@400;800&family=Dancing+Script&family=Forum&family=Gideon+Roman&family=Great+Vibes&family=Karla:ital,wght@0,200;0,300;1,200;1,300&family=Lemonada:wght@300;400;500&family=Lobster&family=Merriweather:ital,wght@0,300;1,300&family=Monoton&family=Montserrat:ital,wght@0,100;0,300;0,500;0,800;1,100;1,300;1,500;1,800&family=Outfit:wght@200;500&family=Overlock:ital,wght@0,400;0,700;1,400;1,700&family=Staatliches&display=swap');

	// font-family: 'Allura', cursive;
	// font-family: 'Bad Script', cursive;
	// font-family: 'Coda', cursive;
	// font-family: 'Dancing Script', cursive;
	// font-family: 'Forum', cursive;
	// font-family: 'Gideon Roman', cursive;
	// font-family: 'Great Vibes', cursive;
	// font-family: 'Karla', sans-serif;
	// font-family: 'Lemonada', cursive;
	// font-family: 'Merriweather', serif;
	// font-family: 'Montserrat', sans-serif;
	// font-family: 'Outfit', sans-serif;
	// font-family: 'Overlock', cursive;
	// font-family: 'Staatliches', cursive;
</style>

<script>
	export let quote, i;
	import Icon from '@iconify/svelte';

	let icons = {
		edit: 'akar-icons:edit',
		question: 'akar-icons:question',
		upload: 'ant-design:cloud-upload-outlined',
		upsert: 'clarity:upload-outline-badged'
	};

	const handleEdit = (i) => {
		console.log(`edit ${i}`);
		console.log(`🚀 ~ file: DisplayQuotes.svelte ~ line 3 ~ quote`, quote);
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

	function endpoint() {
		const fire = async () => {
			const res = await fetch('/quotes.dgraph.getQuote.json');
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

<div
	class="card quote p-3 m-12 shadow-lg border border-2 border-gray-800 rounded-sm bg-gradient-to-br from-transparent via-gray-900  rounded-xl"
>
	<div class="flex justify-between">
		<div class="count badge bg-gray-700">{i + 1}</div>
		<div class="flex">
			<div class="edit-quote hover:cursor-pointer" on:click={() => handleQuery(i)}>
				<Icon icon={icons.question} class="w-8 h-8 ml-2 -mt-1" />
			</div>
			<div class="edit-quote hover:cursor-pointer" on:click={() => handleEdit(i)}>
				<Icon icon={icons.edit} class="w-8 h-8 ml-2 -mt-1" />
			</div>
			<div class="edit-quote hover:cursor-pointer" on:click={() => uploadQuote(quote, 'addQuote')}>
				<Icon icon={icons.upload} class="w-8 h-8 ml-2 -mt-1" />
			</div>
			<div
				class="edit-quote hover:cursor-pointer"
				on:click={() => uploadQuote(quote, 'upsertQuote')}
			>
				<Icon icon={icons.upsert} class="w-8 h-8 ml-2 -mt-1" />
			</div>
		</div>
	</div>
	<label class="input-group input-group-xs rounded-none">
		<span class="bg-slate-900 rounded-none">Original</span>
		<span class="rounded-none badge badge-warning input-xs bg-slate-900 text-sky-500 input-xs"
			>{quote.originalText}</span
		>
	</label>
	<h1 class="quote-body p-8 text-2xl">
		<span class="quote-mark text-sky-300">&ldquo;</span>{@html quote.quoteBody}<span
			class="quote-mark text-sky-300">&rdquo;</span
		>
		<span class="quote-author text-sky-300"
			>~ {quote.author.name ? quote.author.name : quote.author}</span
		>
	</h1>
	<div class="flex flex-col justify-items-start place-items-start">
		<!-- <h1 class="badge badge-xl badge-success">{quote.author}</h1> -->
		<label class="input-group input-group-xs">
			<span class="bg-slate-900">Author</span>
			<span class="badge badge-success bg-slate-900 text-sky-300 input-xs"
				>{quote.author.name ? quote.author.name : quote.author}</span
			>
		</label>
		{#if quote.author.title}
			<label class="input-group input-group-xs">
				<span class="bg-slate-900">Title</span>
				<span class="badge badge-success bg-slate-900 text-sky-400 input-xs"
					>{quote.author.title}</span
				>
			</label>
		{/if}
		<!-- {#if quote.authorTitle && quote.authorTitle.length}
			<label class="input-group input-group-xs">
				<span class="bg-slate-900">AuthorTitle</span>
				<span class="font-sans text-sm bg-black rounded-sm mx-1 text-fuchsia-400 input-xs"
					>{quote.authorTitle}</span
				>
			</label>
		{/if} -->
		{#if quote.date}
			<label class="input-group input-group-xs rounded-none">
				<span class="bg-slate-900 rounded-none">Date</span>
				<span class="rounded-none badge badge-info bg-slate-900 text-gray-400 input-xs"
					>{quote.date}</span
				>
			</label>
		{/if}
		{#if quote.source}
			<label class="input-group input-group-xs rounded-none">
				<span class="bg-slate-900 rounded-none">Source</span>
				<span class="rounded-none badge badge-warning input-xs bg-slate-900 text-sky-500 input-xs"
					>{quote.source}</span
				>
			</label>
		{/if}
		{#if quote.tags?.length}
			<label class="input-group input-group-xs rounded-none">
				<span class="bg-slate-900 rounded-none">Tags</span>
				{#each quote.tags as tag}
					<span
						class="rounded-none badge badge-warning input-xs bg-slate-600 mx-1 text-sky-500 input-xs"
						>{tag}</span
					>
				{/each}
			</label>
		{/if}
		{#if quote.context}
			<label class="input-group input-group-xs rounded-none">
				<span class="bg-slate-900 rounded-none">Context</span>
				<span class="rounded-none badge badge-warning input-xs bg-slate-900 text-sky-500 input-xs"
					>{quote.context}</span
				>
			</label>
		{/if}
		<!-- {#if quote.details?.length}
        DETAILS
        {#each quote.details as detail}
            {#if detail.type !== 'undefined'}
                <label class="input-group input-group-xs rounded-none">
                    <span class="bg-slate-900 rounded-none">{detail.type}</span>
                    <span class="rounded-none badge badge-info input-xs">{detail.value}</span>
                </label>
            {/if}
        {/each}
    {/if}
    {#if quote.remainingText?.length}
        <label class="input-group input-group-xs rounded-none">
            <span class="bg-slate-900 rounded-none">remainingText: </span>
            <span class="rounded-none badge badge-info input-xs">{quote.remainingText}</span>
        </label>
    {/if} -->
	</div>
</div>

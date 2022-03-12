<script>
	let inputText = '';
	$: console.log(`🚀 ~ file: index.svelte ~ line 28 ~ inputText`, inputText);

	function onKeyUp(e) {
		if (e.keyCode === 13) {
			itemSubmit();
		}
	}
	function onBlur() {

	}

	function itemSubmit() {
    console.log(`🚀 ~ file: SingleInput.svelte ~ line 40 ~ itemSubmit ~ itemSubmit`, itemSubmit)

	}


	import Icon from '@iconify/svelte';
	const icons = {
		fire1: 'wi:fire',
		fire2: 'vaadin:fire',
		fire3: 'mdi:fire',
		fire4: 'fa:fire',
		fire5: 'fa5:fire',
		fire6: 'fa5:fire-alt',
		fire7: 'el:fire',
		fire8: 'eva:fire',
		arrowCircle1: 'bi:arrow-down-circle-fill',
		arrowCircle2: 'eva:arrow-circle-down-fill',
		arrowCircleLeft2: 'eva:arrow-circle-left-fill',
		home: 'bx:bxs-home-heart',
		x: 'bx:bxs-x-square'
	};
</script>

<div class="statement px-4 mx-4 flex items-center rounded-xl justify-center relative z-10">
	<div class="flex items-center justify-center relative w-auto">
		<input
			type="inputText"
			bind:value={inputText}
			name="inputText"
			class=" z-10 text-sm md:text-base xl:text-lg required inputText rounded-xl bg-transparent focus:shadow-none focus:ring-0 outline-none border-none rounded-none text-gray-100 w-auto"
			id="mce-inputText"
			placeholder="inputText address"
			on:blur={onBlur}
			on:keyup={onKeyUp}
		/>
		<button
			type="submit"
			name="subscribe"
			value="Subscribe"
			id="mc-embedded-subscribe"
			class="button text-sm w-[9ch] md:text-base xl:text-lg h-6 w-auto ml-4 -mr-4 p-5 rounded-r-xl flex items-center justify-center text-center bg-gray-900 hover:bg-gray-800 text-winterblues-400"
			on:click={itemSubmit}>Add</button
		>
	</div>
</div>

<style global lang="scss">
	.statement {
		line-height: 1.25em;
		background: linear-gradient(black, black) padding-box,
			linear-gradient(
					120deg,
					var(--color-emerald-500) 10%,
					var(--color-amber-500) 25%,
					var(--color-rose-500) 50%,
					var(--color-fuchsia-500) 75%,
					var(--color-winterblues-400) 90%
				)
				border-box;
		border: 3px solid transparent;
		// box-shadow: 0px 0px 3px 3px rgba(255,255,255,0.25);
		.author {
			color: var(--color-gray-300);
		}
	}

	.fadeOut {
		opacity: 0;
		transition: all 0.25s;
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus {
		-webkit-text-fill-color: var(--color-winterblues-100);
		-webkit-box-shadow: 0 0 0px 1000px #000 inset;
		transition: background-color 5000s ease-in-out 0.2s;
		// caret-color: var(--color-winterblues-100);
	}
</style>

<script context="module">
    import {supabase} from '$lib/supabaseClient.js';
    console.log(`🚀 ~ file: login.svelte ~ line 3 ~ supabase`, supabase)
    let email = ""
    let password = ""
	const signUp = async () => {
		const { user, session, error } = await supabase.auth.signUp({
			email: email,
			password: password
		}, 
        {
            redirectTo: 'https://localhost:3033/pokemon'
        });
	};

    const signIn = async () => {
		const { user, session, error } = await supabase.auth.signIn({
			email: 'example@email.com',
			// password: 'example-password'
		});
	};
</script>


<div class="flex items-center">
    <label for="email"><input type="text" class="rounded p-3" name="email" placeholder="email" bind:value={email}></label>
    <label for="password"><input type="text" class="rounded p-3" name="password" placeholder="password" bind:value={password}></label>
    <button class="p-3 m-3 rounded bg-electricindigo-700 text-white" on:click={signIn}>Login</button>
    <button class="p-3 m-3 rounded bg-electricindigo-700 text-white" on:click={signUp}>Signup</button>
</div>
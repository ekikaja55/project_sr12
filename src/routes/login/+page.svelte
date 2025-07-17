<!-- src/routes/login/+page.svelte -->
<script lang="ts">
	import { api } from '$lib/api/axios';
	let username = '';
	let password = '';
	let error = '';

	async function login() {
		try {
			const res = await api.post('/login', {
				username,
				password
			});

			alert('Login berhasil: ' + res.data.username);
			window.location.href = '/';
		} catch (err) {
			error = 'Login gagal';
			console.error(err);
		}
	}
</script>

<h1>Login</h1>
<form on:submit|preventDefault={login}>
	<input bind:value={username} placeholder="Username" />
	<input bind:value={password} placeholder="Password" type="password" />
	<button type="submit">Login</button>
</form>
{#if error}<p style="color:red">{error}</p>{/if}

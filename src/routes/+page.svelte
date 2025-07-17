<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { page } from '$app/state';
	import { api } from '$lib/api/axios';
	import { onMount } from 'svelte';
	let res: any = { data: {} };

	onMount(async () => {
		try {
			res = await api.get('/');
		} catch (err) {
			alert('Kamu belum login!');
			console.error(err);
			window.location.href = '/login';
		}
	});
</script>

<h1>Dashboard</h1>
{JSON.stringify(res.data, null, 2)}
<p>Halaman ini hanya bisa diakses jika kamu sudah login.</p>
<!-- logout -->
<button
	on:click={() => {
		api
			.post('/logout')
			.then(() => {
				alert('Logout berhasil');
				window.location.href = '/login';
			})
			.catch((err) => {
				console.error(err);
				alert('Logout gagal');
			});
	}}>Logout</button
>

<script>
	import Nav from '../components/nav.svelte';
	import Footer from '../components/footer.svelte';
	import { page } from '$app/stores';
	import { readable } from 'svelte/store';

	const routes = readable(['/book', '/loginService']);
</script>

<svelte:head>
	<link href="../../css/rezo.css" rel="stylesheet" type="text/css" />
</svelte:head>

<div class="mx-auto">
	{#if $routes.includes($page.url.pathname) === !1}
	<Nav />
	{/if}
	<slot />
	{#if $routes.includes($page.url.pathname) === !1}
	<Footer />
	{/if}
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

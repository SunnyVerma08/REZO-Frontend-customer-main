<script>
	import { onMount } from 'svelte';
	import { notifications } from '../components/notifications.js';
	import Toast from '../components/Toast.svelte';
	import axios from 'axios';
	import { isUserLoggedIn, ch3ckLoggedIn, SERVERADDRESS } from '../checkAuth';
	import { indexServices, indexServicesApi } from '../apiCallStore';
	import FrontJPG from '../../static/img/front-view-male.jpg'

	// 🎇 runs one time as soon as app loads
	onMount(async () => {
		await indexServicesApi();
		ch3ckLoggedIn();
	});

	let services = [];
	$: services = $indexServices;
	// $: console.log($indexServices);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!-- Pricing section -->
<section class="w-full mt-20 mb-20">
	<!-- <div class="px-10 mx-auto text-center max-w-7xl">
		<h2 class="text-5xl font-bold text-blue-600">
			Service <span class="text-gray-800">Plans</span>
		</h2>
		<p class="mt-3 text-lg text-gray-500">
			Our Service plans are designed to meet the needs of anyone.
		</p> -->

		<!-- Start Plan -->
		<!-- {#if services !== undefined && services.length > 0}
			<div class="grid gap-5 mt-12 lg:grid-cols-3 md:grid-cols-2">
				{#each services as { planName, color, rate, dataPoints }}
					<div class="relative flex flex-col justify-between p-8 lg:p-6 xl:p-8 rounded-2xl">
						<div
							class="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-blue-50 rounded-2xl" />
						<div class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-2xl" />
						<div
							class="relative flex pb-5 space-x-5 border-b border-gray-200 lg:space-x-3 xl:space-x-5">
							<svg
								class="w-16 h-16 text-blue-400 rounded-2xl"
								viewBox="0 0 150 150"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								><defs><rect x="0" y="0" width="150" height="150" rx="15" /></defs><g
									fill="none"
									fill-rule="evenodd"
									><mask fill="#fff"><use xlink:href="#plan1" /></mask><use
										fill="currentColor"
										xlink:href="#plan1" /><circle
										fill-opacity=".3"
										fill="#FFF"
										mask="url(#plan1)"
										cx="125"
										cy="25"
										r="50" /><path
										fill-opacity=".3"
										fill="#FFF"
										mask="url(#plan1)"
										d="M-33 83H67v100H-33z" /></g
								></svg>
							<div class="relative flex flex-col items-start">
								<h3 class="text-xl font-bold">{planName}</h3>
								<p class="tracking-tight text-gray-500">
									<span class="text-sm transform inline-block -translate-y-2.5 relative">INR</span>
									<span class="text-3xl font-bold text-gray-800">{rate}</span>
									<span class="text-sm -translate-y-0.5 inline-block transform">/ user</span>
								</p>
							</div>
						</div>

						<ul class="relative py-12 space-y-3">
							{#each dataPoints as data}
								<li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
									<svg
										class="w-6 h-6 text-blue-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										><path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd" /></svg>
									<span>{data}</span>
								</li>
							{/each}
						</ul>

						<a
							href="/services/{planName}"
							class="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group">
							<span
								class="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-blue-500" />
							<span class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl" />
							<span class="relative">Choose Plan</span>
							<svg
								class="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clip-rule="evenodd" /></svg>
						</a>
					</div>
				{/each}
			</div>
		{:else}
			<div class=" flex justify-center items-center m-40">
				<div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
			</div>
		{/if} -->

		<!-- End Plan -->
	<!-- </div> -->
	<div class="flex justify-around flex-col space-y-2 px-4 sm:px-0 sm:space-y-0 sm:flex-row">
		<div class="inline-flex space-x-3 items-center">
			<div class="w-full sm:w-1/3 md:h-24 lg:h-40 min-h-80 aspect-h-1 aspect-w-1 overflow-hidden">
				<img src={FrontJPG} alt="Cashback" class="w-full h-full object-cover object-center lg:w-full md:w-full" />
			</div>
			<div class="text-left">
				<span class="text-red-600 text-3xl font-light block">Pehli booking pe</span>
				<span class="text-red-600 text-4xl font-bold block">50% Cashback</span>
			</div>
		</div>

		<div class="inline-flex space-x-3 items-center">
			<div class="text-left">
				<span class="text-red-600 text-2xl font-bold block">Starting</span>
				<p class="text-red-600 text-6xl">&#8377;399</p>
			</div>
			<div class="w-full sm:w-1/3 md:h-24 lg:h-40 min-h-80 aspect-h-1 aspect-w-1 overflow-hidden">
				<img src={FrontJPG} alt="Cashback" class="w-full h-full object-cover object-center lg:w-full md:w-full" />
			</div>
		</div>
	</div>

	<div class="border border-gray-300 p-4 mx-6 sm:mx-14 mt-12 flex justify-between rounded flex-col sm:flex-row space-y-4 sm:space-y-0">
		<div class="inline-flex items-center space-x-4">
			<img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
			<div class="text-left">
				<h6 class="text-sm font-bold">Get access to exclusive deals</h6>
				<span class="text-xs text-gray-400">Only the best deal reach your inbox</span>
			</div>
		</div>
		<div class="relative inline-flex items-center">
			<label for="notify_me" class="block text-sm font-medium text-gray-700 absolute -top-1.5 left-5 w-20 h-5 bg-white text-center">First name</label>
            <input type="text" name="notify_me" id="notify_me" class="border border-gray-400 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md px-2" placeholder="E.g. john@example.com">
			<button type="button" class="p-2 bg-red-600 text-white rounded-md w-1/2 ml-2">Notify Me</button>
		</div>
	</div>
</section>

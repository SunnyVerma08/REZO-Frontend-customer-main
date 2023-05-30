<script>
	import { onMount } from 'svelte';
	import { notifications } from '../components/notifications.js';
	import Toast from '../components/Toast.svelte';
	import axios from 'axios';
	import { isUserLoggedIn, ch3ckLoggedIn, APICall, USERDATA, SERVERADDRESS } from '../checkAuth';
	import { goto } from '$app/navigation';
	let bookingData;
	// 🎇 runs one time as soon as app loads
	onMount(async () => {
		if ((await ch3ckLoggedIn()) === undefined) goto('/login');
		bookingData = (await APICall(`/api/v1/bookings?user=${$USERDATA._id}`)).data.data;
	});
</script>

<svelte:head>
	<title>Profile</title>
</svelte:head>

<!-- Pricing section -->
<section class="w-full pt-16 pb-20 bg-gray-50">
	{#if bookingData}
	<div class="px-10 mx-auto text-center max-w-7xl">
		<h2 class="text-5xl font-bold text-blue-600">
			{$USERDATA?.name?.toUpperCase()}'s <span class="text-gray-800">Bookings</span>
		</h2>
		<p class="mt-3 text-lg text-gray-500">Your Data is in our system is as follows</p>

		<!-- Start Plan -->
			<!-- This is an example component -->

			<!-- component -->
			<link
				href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
				rel="stylesheet" />
			<div class="flex items-center justify-center  bg-white">
				<div class="col-span-12">
					<div class="overflow-auto lg:overflow-visible">
						<div class="flex lg:justify-between border-b-2 border-fuchsia-900 pb-1">
							<h2 class="text-2xl text-gray-500 font-bold">Bookings</h2>
						</div>
						<table class="table text-gray-400 border-separate space-y-6 text-sm">
							<thead class="bg-blue-500 text-white">
								<tr>
									<th class="p-3">Service</th>
									<th class="p-3 ">Vehicle</th>
									<th class="p-3 ">Location</th>
									<th class="p-3 ">Rate</th>
									<th class="p-3 ">Workshop Assigned</th>
									<th class="p-3 text">Slot</th>
									<th class="p-3 ">Completed</th>
									<th class="p-3 ">Paid</th>
								</tr>
							</thead>
							<tbody>
								{#each bookingData as { service, vehicle, location, workshopAllotedTo, completed, paid, slot }}
									<tr class="bg-blue-200 lg:text-black">
										<td class="p-3 font-medium capitalize">{service.planName}</td>
										<td class="p-3">{vehicle}</td>
										<td class="p-3">{location}</td>
										<td class="p-3 uppercase">{service.rate} INR</td>

										<td class="p-3">
											{#if workshopAllotedTo}
												<span class="bg-green-600 text-gray-50 rounded-md px-2"
													>{workshopAllotedTo.name}</span>
											{:else}
												<span class="bg-red-600 text-gray-50 rounded-md px-2">Not Assigned</span>
											{/if}
										</td>
										<td class="p-3">
											<span class="bg-green-600 text-gray-50 rounded-md px-2"
												>{new Date(slot.date).toLocaleDateString()}</span>

											<span class="bg-green-600 text-gray-50 rounded-md px-2">{slot.time}</span>
										</td>
										<td class="p-3"
											>{#if completed}
												<span class="bg-green-600 text-gray-50 rounded-md px-2">Completed</span>
											{:else}
												<span class="bg-red-600 text-gray-50 rounded-md px-2">Not Completed</span>
											{/if}</td>
										<td class="p-3">
											{#if paid}
												<span class="bg-green-600 text-gray-50 rounded-md px-2">Paid</span>
											{:else}
												<span class="bg-red-600 text-gray-50 rounded-md px-2">Not Paid</span>
											{/if}
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		<!-- End Plan -->
	</div>
	{:else}
			<div class=" flex justify-center items-center m-40">
				<div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
			</div>
	{/if}
</section>

<style>
	.table {
		border-spacing: 0 15px;
	}

	i {
		font-size: 1rem !important;
	}

	.table tr {
		border-radius: 20px;
	}

	tr td:nth-child(n + 8),
	tr th:nth-child(n + 8) {
		border-radius: 0 0.625rem 0.625rem 0;
	}

	tr td:nth-child(1),
	tr th:nth-child(1) {
		border-radius: 0.625rem 0 0 0.625rem;
	}
</style>

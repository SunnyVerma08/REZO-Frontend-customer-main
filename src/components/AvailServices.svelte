<script>
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import GPSPNG from '../../static/img/icons/icons8-gps-24.png';
    import Icon from './Icon.svelte';
    import { util } from '../helpers/util';

    let address;

    const handleClick = (id, name) => () => {
        history.replaceState(null, null, `${$page.url.href}&service=${name.toLowerCase()}`)
        selectedService = { selected: true }
    }

    $: address = util.getWorkShop().find(loc => loc.name === location).addresses[0];

    export let selectedService = {};
    // export let nearByServices = {};
    // export let mode = {};
    export let model = {};
    export let location = '';
</script>

<div class="available-services p-3 ml-2 shadow bg-white rounded-md">
    <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 -mt-3">
            <li class="flex py-3">
                <div class="flex-shrink-0 overflow-hidden h-6 w-6">
                    <img src={GPSPNG} class="h-full w-full object-cover object-center" alt="GPS" />
                </div>
                <div class="flex-1 flex flex-col ml-4">
                    <h3 class="text-sm font-light tracking-wide">Workshop is located at <address>{address.full_address}</address> </h3>
                    <!-- <div class="">
                        <ul role="list" class="list-disc list-inside">
                            <li class="text-xs text-gray-400">No pre-payment required</li>
                            <li class="text-xs text-gray-400">7 days service gurantee</li>
                        </ul>
                    </div> -->
                </div>
            </li>
            {#each util.getServices() as service}
            {@const { cost, duration } = util.getPricingOnCC(service.engine_cc, model.cc)}
            <li class="flex py-3 cursor-pointer" on:click={handleClick(service._id, service.name)} data-service-id={service._id}>
                <div class="flex-shrink-0 overflow-hidden h-6 w-6">
                    <!-- <img src={GPSPNG} class="h-full w-full object-cover object-center" alt="GPS" /> -->
                    <Icon type="bike" width={24} height={24} />
                </div>
                <div class="flex-1 flex flex-col ml-4">
                    <div class="flex justify-between text-base font-medium">
                        <h3 class="tracking-wide">{service.name}</h3>
                        <p class="mx-4">&#8377;{cost}</p>
                    </div>
                    <div class="">
                        <ul role="list">
                            <li class="text-xs font-normal text-gray-600">{duration} Min</li>
                        </ul>
                    </div>
                </div>
            </li>
            {/each}
        </ul>
    </div>
</div>
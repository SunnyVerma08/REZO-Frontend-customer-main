<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import _ from 'lodash';
    import DownArrow from '../../static/img/icons/down-arrow.png';
    import FrontView from '../../static/img/front-view-male.jpg';
    // import LocationModal from '../components/LocationModal.svelte';
    // import Backdrop from '../components/Backdrop.svelte';
    import AvailServices from '../components/AvailServices.svelte';
    import SelectedServices from '../components/SelectedServices.svelte';
    import ServiceLayout from '../Layout/ServiceLayout.svelte';
    import Loader from '../components/Loader.svelte';
    import { apiCall, appStore } from '../apiCallStore';
    import { util } from '../helpers/util';

    const navStyle = 'font-size:0,line-height:0';
    let modes = [];
    let loading = null;

    let bookState = {
        mode: '',
        day: '',
        time: '',
        showBackdrop: false,
        location: '',
        modalProps: {},
    }
   
    let locationProp = {
        detectAutoLocation: true,
        geolocation: { label: 'Find nearby workshop' },
        time: false,
        backdrop: null,
        loading: !1,
        coords: {}
    }

    let availServicesProp = {
        selected: false
    }

    $: bookState = { 
        ...bookState, 
        modalProps : {
            classes : bookState.showBackdrop ? 'bottom-0' : '-bottom-64',
        }
    }

    const onChange = e => {
        bookState = { ...bookState, [e.target.name]: e.target.value }
    }

    // const findNearBy = () => {
    //     bookState = { ...bookState, showBackdrop: true }
    // }

    onMount(async () => {
        await apiCall('getModel', { model_id: $page.url.searchParams.get('model_id') });
    })
    
    $: {
        if($appStore.model){
            modes = Object.keys($appStore.model[0].services);
        }
        loading = $appStore.loading
    }
</script>

<ServiceLayout showLogo={true} backgroundImage={FrontView}>
    <div class="block h-full w-full absolute top-0 left-0 pt-12 overflow-scroll">
        <div class="book-nav h-10 text-center" role="navigation" style={`font-size:0`}>
            <div class="inline-block align-middle w-4/12" style={navStyle}>
                <div class="lg:relative py-2">
                    <a href="#/service" class="text-black px-4 text-base font-bold inline-block h-6 relative bg-yellow-400 rounded-xl">
                        Service
                    </a>
                </div>
            </div>
            <!-- <div class="inline-block align-middle w-4/12" style={navStyle}>
                
            </div>
            <div class="inline-block align-middle w-4/12" style={navStyle}>
                
            </div> -->
        </div>
        <h5 class="text-center mt-2.5 text-sm font-semibold">Please select your preferences</h5>
        <div class="mb-5 mt-3 mx-20">
            <div class="grid grid-cols-6 gap-3">
                <div class="col-span-6">
                    <div class="relative bg-gray-300 border border-gray-300 rounded-3xl">
                        <div class="relative h-10 leading-5">
                            <label for='mode' class="absolute w-16 pl-3 text-xs text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap leading-10">Mode</label>
                            <div class="text-lg overflow-hidden whitespace-nowrap overflow-ellipsis leading-10 absolute left-20 right-2 bg-no-repeat bg-right" style={`background-image:url(${DownArrow}); background-size:28px 8px;`}>
                                <select id="mode" name="mode" class="border-0 outline-none pl-0 text-left relative -top-px left-auto bg-transparent h-full w-full appearance-none text-gray-500 text-sm" data-ops='mode' bind:value={bookState.mode} on:change={onChange}>
                                    <!-- <option selected value="">Select Mode</option>
                                    {#each modes as mode}
                                    <option value={mode}>{_.capitalize(mode)}</option>
                                    {/each} -->
                                    <option selected value="">Select Mode</option>
                                    <option value='workshop'>Service at Workshop</option>
                                    <option value='home'>Service at Home</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {#if !_.isEmpty(bookState.mode)}
                <div class="col-span-6">
                    <div class="relative bg-gray-300 border border-gray-300 rounded-3xl">
                        <div class="relative h-10 leading-5">
                            <label for='mode' class="absolute w-16 pl-3 text-xs text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap leading-10">Location</label>
                            <!-- <div class="text-lg overflow-hidden whitespace-nowrap overflow-ellipsis leading-10 absolute -top-px left-20 right-2 bg-no-repeat bg-right cursor-pointer">
                                {#if locationProp.detectAutoLocation}
                                <span class="text-gray-500 text-sm" on:click={findNearBy}>{locationProp.geolocation.label}</span>
                                {:else}
                                <input type="text" name="location" id="location" class="bg-transparent outline-none text-sm text-gray-500" />
                                {/if}
                            </div> -->
                            <div class="text-lg overflow-hidden whitespace-nowrap overflow-ellipsis leading-10 absolute left-20 right-2 bg-no-repeat bg-right" style={`background-image:url(${DownArrow}); background-size:28px 8px;`}>
                                <select id="location" name="location" class="border-0 outline-none pl-0 text-left relative -top-px left-auto bg-transparent h-full w-full appearance-none text-gray-500 text-sm" data-ops='location' bind:value={bookState.location} on:change={onChange}>
                                    <!-- <option selected value="">Select Mode</option>
                                    {#each modes as mode}
                                    <option value={mode}>{_.capitalize(mode)}</option>
                                    {/each} -->
                                    <option selected value="">Select Location</option>
                                    <option value='delhi'>Delhi</option>
                                    <option value='bangalore'>Bangalore</option>
                                    <option value='mumbai'>Mumbai</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {/if}

                {#if !_.isEmpty(bookState.location)}
                <div class="col-span-6">
                    <div class="relative bg-gray-300 border border-gray-300 rounded-3xl">
                        <div class="relative h-10 leading-5">
                            <label for='mode' class="absolute w-16 pl-3 text-xs text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap leading-10">When</label>
                            <div class="text-lg overflow-hidden whitespace-nowrap overflow-ellipsis leading-10 absolute -top-px left-20 right-2 bg-no-repeat bg-right cursor-pointer h-full">
                                <div class="h-full w-1/2 inline-block top-0 leading-10 bg-no-repeat bg-right" style={`background-image:url(${DownArrow}); background-size:28px 8px;`}>
                                    <select id="day" name="day" class="border-0 outline-none pl-0 text-left relative left-auto bg-transparent h-full w-full appearance-none text-gray-500 text-sm" data-ops="day" bind:value={bookState.day} on:change={onChange}>
                                        <option value="" selected>Select</option>
                                        {#await util.days() then days}
                                            {#each days as { value, text }}
                                                <option value={value}>{text}</option>
                                            {/each}
                                        {/await}
                                    </select>
                                </div><div class="h-full w-1/2 inline-block top-0 leading-10 bg-no-repeat bg-right" style={`background-image:url(${DownArrow}); background-size:28px 8px;`}>
                                    <select id="time" name="time" class="border-0 outline-none pl-0 text-left relative left-auto bg-transparent h-full w-full appearance-none text-gray-500 text-sm" data-ops="time" bind:value={bookState.time} on:change={onChange}>
                                        <option value="" selected>Select</option>
                                        {#await util.serviceTime('08:00', '17:00') then time}
                                            {#each time as { value, text }}
                                                <option value={value}>{text}</option>
                                            {/each}
                                        {/await}
                                    </select>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                {/if}
            </div>
        </div>

        {#if !_.isEmpty(bookState.location) && !availServicesProp.selected}
            <AvailServices bind:selectedService={availServicesProp} 
            nearByServices={locationProp.workshop} 
            mode={$appStore.model[0].services[bookState.mode]} 
            model={$appStore.model[0].model}
            location={bookState.location}
            />
        {/if}

        {#if availServicesProp.selected}
            <SelectedServices  />
        {/if}

    </div>
    <Loader show={loading} width={52} height={52} />
    <!-- <Backdrop show={locationProp.backdrop !== null ? locationProp.backdrop : bookState.showBackdrop} component={LocationModal} props={bookState.modalProps} bind:prop={locationProp} /> -->
</ServiceLayout>
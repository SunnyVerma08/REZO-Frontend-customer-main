<script>
    import Feature from '../components/Feature.svelte';
    import HeaderBackground from '../Layout/HeaderBackground.svelte';

    let featureState = {
        tab: {
            classes: `text-sm w-32 inline-block uppercase h-10 leading-10 pointer 
                      transition-all bg-transparent font-normal text-white hover:bg-white hover:bg-opacity-25`,
            citytaxi: !0,
            outstation: !1,
        }
    }

    const tabChange = e => {
        const { tab } = e.currentTarget.dataset;

        if('citytaxi' === tab)
            featureState = { 
                ...featureState, 
                tab: { ...featureState.tab, [tab]: !featureState[tab], outstation: !1 }
            }
        else if('outstation' === tab)
            featureState = { 
                ...featureState, 
                tab: { ...featureState.tab, [tab]: !featureState[tab], citytaxi: !1 }
            }
    }

</script>

<HeaderBackground height={450} src={'https://www.olacabs.com/webstatic/img/features-banner.jpg'}>
    <div class="text-overlay"></div>
    <div class="absolute left-1/2 top-1/2 transform -translate-x-2/4 -translate-y-2/4 text-center text-white">
        <h1 class="text-5xl font-semibold m-2 text-shadow-x-0 text-shadow-y-2 text-shadow-blur-3 text-shadow">Cab Features</h1>
        <span class="text-xl font-medium text-shadow-x-0 text-shadow-y-2 text-shadow-blur-3 text-shadow">What makes us different?</span>
    </div>
</HeaderBackground>

<section>
    <div class="text-center">
        <div class="relative z-20 -mt-10">
            <a href="#city" class={`${featureState.tab.classes+' '+ (featureState.tab.citytaxi?'tab-active':'')}`} data-tab="citytaxi" on:click={tabChange}>
                City Taxi
            </a>
            <a href="#outstation" class={`${featureState.tab.classes+' '+(featureState.tab.outstation?'tab-active':'')}`} data-tab="outstation" on:click={tabChange}>
                Outstation
            </a>
        </div>
        <div class="text-center">
            <div class={`opacity-0 transition-all overflow-hidden invisible h-0 w-full ${featureState.tab.citytaxi?'content-active':''}`} id="citytaxi">
                City
            </div>
            <div class={`opacity-0 transition-all overflow-hidden invisible h-0 w-full ${featureState.tab.outstation?'content-active':''}`} id="outstation">
                Outstation
            </div>
        </div>
    </div>
</section>

<section class="relative">
    <Feature />
</section>

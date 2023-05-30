<script>
    import { fade } from 'svelte/transition';
    import { createEventDispatcher, onDestroy } from 'svelte';
   
    const dispatch = createEventDispatcher();
    const close = (e) => { 
        if(e.target.classList.contains('prevent-hide'))
            return;

        dispatch('close') 
    };

    export let component;
    export let show;
    export let props = {};
    export let prop = {};
</script>

{#if show}
<div class="fixed left-0 right-0 h-screen bg-black bg-opacity-70 w-full max-w-xl m-0 block z-50" aria-hidden={show} on:click={close} transition:fade>
    <svelte:component this={component} {...props} bind:defaultProp={prop} />
</div>
{/if}
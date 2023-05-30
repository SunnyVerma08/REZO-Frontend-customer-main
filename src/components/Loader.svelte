<script>
    export let width = 32;
    export let height = 32;
    export let show = false;
</script>

{#if show}
<!-- <div class="fixed top-0 left-0 right-0 bottom-0 bg-white loader-overlay">
    <div class="flex justify-center items-center h-full">
        <div class={`animate-spin rounded-full border-t-2 border-b-2 border-purple-500`} style={`width:${width}px;height:${height}px`} />
    </div>
</div> -->
<div class="fixed top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden loader-overlay">
    <div class="loader-bar">
        <div class="absolute top-0 h-1 block w-full overflow-hidden bg-gray-300">
            <div class="bg-yellow-300 indeterminate"></div>
        </div>
    </div>
</div>
{/if}
<script>
    export let height = 625;
    export let src;
</script>

<div class="w-full lg:bg-cover bg-center p-4" style={`height:${height}px;background-image:url(${src})`}>
    <div class="relative h-full w-full bg-opacity-5">
        <slot />
    </div>
</div>
<script>
    import RezoLogo from '../../static/img/rezo-black-87x32.png';
    export let showLogo ;
    export let backgroundImage;
    export let header = true;
</script>

<main class="book">
    <div class="block bg-gray-100 w-full max-w-xl absolute top-0 bottom-0 m-0">
        <div class="block h-screen">
            {#if header}
            <header class="h-12 block fixed top-0 left-0 w-full max-w-xl z-10 m-0 bg-gray-100">
                <div class="relative pt-3 pb-3 text-center">
                    <span class="absolute top-0 left-0 cursor-pointer py-3 px-2">
                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </span>
                    {#if showLogo}
                    <a href='/'>
                        <img src={RezoLogo} alt='Rezo Home' class="inline-block invert h-7" />
                    </a>
                    {/if}
                    <span class="absolute top-0 right-0 py-3 px-2">
                        <a href='/login' class="text-gray-800 text-sm font-light uppercase opacity-80">Log In</a>
                    </span>
                </div>
            </header>
            {/if}
            <slot />
        </div>
    </div>
    <div class="hidden absolute right-0 top-0 bottom-0 bg-black bg-cover bg-center sm:block" style={`background-image:url(${backgroundImage});left:576px`}>
        <div class="hidden sm:block"></div>
    </div>
</main>
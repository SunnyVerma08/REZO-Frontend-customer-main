<script>
    import { beforeUpdate } from 'svelte';
    import * as jQuery from 'jquery';

   beforeUpdate(async () => {
     await import('slick-carousel');
     jQuery('#slick').slick();
   })

   export let slidesToShow = 1;
   export let slidesToScroll = 1;
   export let arrows = true;
   export let dots = false;
   export let autoplay = false;
   export let autoplaySpeed = 2000;
   export let items = [];
</script>

<style global>
  @import 'slick';
  @import 'slick-theme';
</style>

<div id="slick" data-slick={`{"slidesToShow": ${slidesToShow}, "slidesToScroll": ${slidesToScroll}, "arrows": ${arrows}, "dots": ${dots}, "autoplay": ${autoplay}, "autoplaySpeed": ${autoplaySpeed}}`}>
    {#each items as { src, title, subTitle, description  }}
    <a class="relative w-full inline-block" style="height: 500px" href="/#">
       <div class="relative" style={`height: 500px; background: rgba(0, 0, 0, 0) url(${src}) scroll 0% 0%; background-repeat:no-repeat;background-size:cover`}></div>
        <div class="absolute left-0 right-0 top-0 bottom-0 h-full w-full bg-black bg-opacity-10 z-10"></div>
        <div class="absolute left-0 right-0 top-0 bottom-0 h-full w-4/5 opacity-80 z-20" style="background-image: linear-gradient(270deg,transparent,#000 82%)"></div>
        <div class="absolute top-64 left-0 right-0 m-auto text-white font-normal w-full z-50 max-w-6xl">
           <div class="tracking-widest w-96">
              <div class="text-2xl mb-1 font-normal">{title}</div>
              <div class="text-xl mb-3 font-normal">{subTitle}</div>
              <p class="font-light leading-6 text-lg">
                 {description}
              </p>
           </div>
        </div>
     </a>
     {:else}
        <div class="absolute left-0 right-0 top-0 bottom-0 h-full w-full bg-black bg-opacity-10 z-10"></div>
        <div class="absolute left-0 right-0 top-0 bottom-0 h-full w-4/5 opacity-80 z-20" style="background-image: linear-gradient(270deg,transparent,#000 82%)"></div>
     {/each}
</div>
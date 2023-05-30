<script>
   import SlickCarousel from "../components/slick/SlickCarousel.svelte";

   const items = [
      { 
         src: 'https://partners.olacabs.com/public/corousel/driver_partner2.jpg', 
         title: 'Manpreet Singh, Ludhiana', 
         subTitle: 'Driver', 
         description: 'Manpreet used his life savings to buy an auto and become an Ola driver-partner. With Ola, he gets more bookings than regular auto drivers' 
      },
      { 
         src: 'https://partners.olacabs.com/public/corousel/driver_partner1.jpg', 
         title: 'Manpreet Singh, Ludhiana', 
         subTitle: 'Driver', 
         description: 'Manpreet used his life savings to buy an auto and become an Ola driver-partner. With Ola, he gets more bookings than regular auto drivers' 
      }
   ]
</script>


<div class="w-full corporate">
   <SlickCarousel items={items} autoplay={true} dots={true} arrows={false} />
   <section class="text-center pt-4 pb-10">
      <div class="max-w-6xl m-auto">
         <h1 class="text-4xl text-gray-900 block mb-2 font-semibold tracking-wider">Make Money. Earn Respect. Secure Your Future. </h1>
         <h4 class="text-base text-gray-600 font-thin tracking-wider">Apply now to become an Ola driver-partner. Start earning in 24 hours!</h4>
         <div class="mt-14 clearfix">
            <div class="m-0 p-0 flex flex-col md:flex-row items-center">
               <div class="text-center md:w-1/3 w-2/4 md:mb-0 mb-4">
                  <img src="https://partners.olacabs.com/public/img/type1.c1be690.png" alt="Driver" class="w-80 h-52 rounded inline-block" />
                  <p class="text-2xl mt-10 mb-10 font-semibold tracking-wider">
                     <span class="font-light">Join Ola as a</span> <br />
                     Partner with a Car
                  </p>
                  <a href="/#" class="w-56 text-lg font-normal border-2 rounded-full bg-white inline-block text-blue-600 align-top text-center border-blue-600 m-auto py-3 px-6">Attach my Car</a>
               </div>

               <div class="text-center md:w-1/3 w-2/4 md:mb-0 mb-4">
                  <img src="https://partners.olacabs.com/public/img/type1.c1be690.png" alt="Driver" class="w-80 h-52 rounded inline-block" />
                  <p class="text-2xl mt-10 mb-10 font-semibold tracking-wider">
                     <span class="font-light">Join Ola as a</span> <br />
                     Partner with a Car
                  </p>
                  <a href="/#" class="w-56 text-lg font-normal border-2 rounded-full bg-white inline-block text-blue-600 align-top text-center border-blue-600 m-auto py-3 px-6">Attach my Car</a>
               </div>

               <div class="text-center md:w-1/3 w-2/4 md:mb-0 mb-4">
                  <img src="https://partners.olacabs.com/public/img/type1.c1be690.png" alt="Driver" class="w-80 h-52 rounded inline-block" />
                  <p class="text-2xl mt-10 mb-10 font-semibold tracking-wider">
                     <span class="font-light">Join Ola as a</span> <br />
                     Partner with a Car
                  </p>
                  <a href="/#" class="w-56 text-lg font-normal border-2 rounded-full bg-white inline-block text-blue-600 align-top text-center border-blue-600 m-auto py-3 px-6">Attach my Car</a>
               </div>
            </div>
         </div>
      </div>
      <div class="max-w-6xl mt-10 m-auto bg-gray-200 p-8 rounded-md tracking-wider leading-6 inline-flex items-center bg-opacity-20">
         <div class="w-2/3 pr-5 text-left">
            <div class="text-gray-800 text-xl font-medium block mb-1"> Attach your Rickshaw or Bike with Ola </div>
            <div class="text-black text-base font-normal">Know about more ways of partnering with Ola & how each category can help you earn more. </div>
         </div>
         <div class="w-1/3 text-right">
            <a href="/#" class="px-9 rounded-full text-white text-center text-base font-normal inline-block align-top bg-blue-700 h-10 leading-10">Send your enquiry</a>
         </div>
      </div>
      <div class="clearfix"></div>
   </section>
</div>
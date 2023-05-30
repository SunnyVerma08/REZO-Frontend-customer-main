<script>
    import BestDriverSVG from '../../static/img/icons/ola-best-driver.svg';
	import SupportSVG from '../../static/img/icons/support.svg';
	import SOSSVG from '../../static/img/icons/send_out_succour.svg';

    export let classes = '';

</script>

<div class={"bg-white px-6 py-3 rounded shadow-lg "+ classes}>
    <div class="flex items-center justify-evenly space-x-4">
        <div class="inline-flex space-x-4 items-start">
              <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={SupportSVG} alt="Best Driver">
            <div class="inline-block">
                <span class="block text-lg font-bold">24/7 Customer Support</span>
                <span class="block text-sm font-light text-gray-400 text-left">
                    A dedicated 24/7 support team always at your service to help solve any problem
                </span>
            </div>
        </div>

        <div class="inline-flex space-x-4 items-start">
            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={SOSSVG} alt="">
            <div class="inline-block">
                <span class="block text-lg font-bold">7 Days Service Gurantee</span>
                <span class="block text-sm font-light text-gray-400 text-left">
                    Keep your loved ones informed about your travel routes or call emergency services in need
                </span>
            </div>
      </div>

      <div class="inline-flex space-x-4 items-start">
        <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={BestDriverSVG} alt="">
        <div class="inline-block">
            <span class="block text-lg font-bold">Top Rated Mechanics</span>
            <span class="block text-sm font-light text-gray-400 text-left">
                All our driver-partners are backgroud verified and trained to deliver only the best experience
            </span>
        </div>
  </div>
    </div>
</div>
<script>
    import { fade } from 'svelte/transition';

    const countries = [
      { name: 'Australia', code: '+61', flag: '../../static/img/icons/au.svg' },
      { name: 'New Zealand', code: '+64', flag: '../../static/img/icons/nz.svg' },
      { name: 'Afghanistan', code: '+93', flag: '../../static/img/icons/af.svg' },
      { name: 'Bangladesh', code: '+880', flag: '../../static/img/icons/bd.svg' },
      { name: 'Malaysia', code: '+60', flag: '../../static/img/icons/my.svg' },
      { name: 'Canada', code: '+1', flag: '../../static/img/icons/ca.svg' },
    ]

    const selectCountry = (code, flag) => () => {
      defaultProp = { ...defaultProp, code, flag }
    }

    export let defaultProp = null;
    export let visible = false;
</script>

{#if visible}
<div class="z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" transition:fade>
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-72 prevent-hide" aria-readonly="true">
            <div class="bg-white prevent-hide">
              <div class="relative prevent-hide">
                <div class="text-center text-sm font-medium tracking-wide p-4 prevent-hide">
                  Select Country
                </div>
              </div>

              <div class="overflow-scroll modal-body">
                <div class="pb-1 bg-white">
                  <div class="table w-full py-3">
                    <div class="text-center table-cell align-middle w-14">
                      <img src="https://olawebcdn.com/sso_images/v1/in.svg" class="inline-block" width="24" height="24" alt="Country" />
                    </div>  
                    <div class="table-cell align-middle text-left text-base text-gray-700">India</div>
                    <div class="table-cell align-middle text-right text-base text-gray-700 pr-6">+91</div>
                  </div>
                  <div class="line"></div>
                  <ul class="m-0 p-0">
                    {#each countries as { name, code, flag }}
                      <li class="table w-full py-3 cursor-pointer" on:click={selectCountry(code, flag)}>
                        <div class="text-center table-cell align-middle w-14">
                          <img src={flag} class="inline-block" width="24" height="24" alt="Country" />
                        </div>  
                        <div class="table-cell align-middle text-left text-base text-gray-700">{name}</div>
                        <div class="table-cell align-middle text-right text-base text-gray-700 pr-6">{code}</div>
                      </li>
                    {/each}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div> 
{/if}
<script>
    import RupeePNG from '../../static/img/icons/rupee-48.png';
    import Select from 'svelte-select';

    let serviceState = {
        collapsed: !1,
        show: !1
    }
    let paymentContainerRef = null;

    const handleClick = e => {
        const { showPanel } = e.currentTarget.dataset;
        if(showPanel === 'collapsible'){
            serviceState = { ...serviceState, collapsed: !serviceState.collapsed }
        }

        if(showPanel === 'listbox'){
            serviceState = { ...serviceState, show: !serviceState.show }
        }
    }

    $: console.log(services);

    export const services = {};
</script>

<div class="selected_services mx-9">
    <div class="p-2 bg-white flex flex-col rounded-md divide-y divide-gray-300">
        <div class="text-center pb-2">
            <h2 class="font-semibold text-xl">&#8377;149</h2>
            <span class="text-sm text-gray-600 capitalize">estimated payment</span>
        </div>
        <div class="text-center pt-2 expanded">
            <button type="button" class="relative w-full group" aria-controls="payment-section-mobile-0" aria-expanded={serviceState.collapsed ? 'true' : 'false'} data-show-panel="collapsible" on:click={handleClick}>
                <span class="text-sm text-blue-500 capitalize"> view payment details </span>
                <span class={`absolute right-2 top-1 text-gray-400 transition-all duration-700 ${serviceState.collapsed ? 'transform -rotate-180' : 'transform rotate-0'}`}>
                    <svg aria-hidden="true" width="16" height="16" focusable="false" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-angle-down fa-w-10 fa-2x">
                        <path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" class=""></path>
                    </svg>
                </span>
            </button>
            <div class={`overflow-hidden transition-all max-h-0 duration-700 `} style={serviceState.collapsed ? 'max-height:'+ paymentContainerRef.scrollHeight + 'px' : ''} id="payment-section-mobile-0" bind:this={paymentContainerRef}>
                <div class="p-6">
					<p>reCAPTCHA v2 is not going away! We will continue to fully support and improve security and usability for v2.</p>
                    <p>reCAPTCHA v3 is intended for power users, site owners that want more data about their traffic, and for use cases in which it is not appropriate to show a challenge to the user.</p>
                    <p>For example, a registration page might still use reCAPTCHA v2 for a higher-friction challenge, whereas more common actions like sign-in, searches, comments, or voting might use reCAPTCHA v3. To see more details, see the reCAPTCHA v3 developer guide.</p>
				</div>
            </div>
        </div>
    </div>

    <div class="p-2 pt-4 flex items-start">
        <span class="text-xs text-gray-400 mr-6">Included:</span>
        <ul role="list" class="-m-1">
            <li class="text-sm">Full Inspection</li>
            <li class="text-sm">Water wash</li>
            <li class="text-sm">Water wash</li>
        </ul>
    </div>

    <div class="p-2 bg-white flex flex-col divide-y divide-gray-300 rounded-md pt-4">
        <div class="flex items-center">
            <span class="text-sm text-gray-400 capitalize w-40">payment method</span>
            <Select items={['Cash']} showChevron={true} />
            <!-- <div class="relative flex-1">
                <button type="button" class="relative w-full bg-white rounded-md pr-10 py-2 text-left cursor-default focus:outline-none sm:text-sm" aria-haspopup="listbox" aria-expanded={serviceState.show ? 'true' : 'false'} aria-labelledby="listbox-label" data-show-panel="listbox" on:click={handleClick}>
                    <span class="flex items-center">
                      <img src={RupeePNG} alt="" class="flex-shrink-0 h-6 w-6 rounded-full">
                      <span class="ml-3 block truncate">
                        Tom Cook
                      </span>
                    </span>
                    <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">

                      <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </span>
                </button>
                <ul role="listbox" class={`absolute z-10 mt-1 w-full bg-white max-h-56 overflow-auto shadow-lg rounded-md text-base ring-1 ring-black ring-opacity-5 focus:outline-none ${!serviceState.show ? 'transition-all delay-700 opacity-0' : '' }`} style={`${serviceState.show ? '' : 'display:none'}`} aria-labelledby="listbox-label" aria-activedescendant="listbox-option-1" >
                    <li class="text-gray-900 cursor-default select-none relative py-2 pr-9 pl-3">
                        <div class="flex items-center">
                            <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="flex-shrink-0 h-6 w-6 rounded-full">
                            <span class="font-medium ml-3 block truncate">
                                Tom Cook
                              </span>
                        </div>

                        <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                              </svg>
                        </span>
                    </li>
                </ul>
            </div> -->
        </div>
        <div class="flex items-center pt-3">
            <span class="text-sm text-gray-400 uppercase w-32">coupon</span>
            <input type="text" placeholder="Enter Coupon" class="w-full focus:outline-none pl-6" />
        </div>
    </div>
    <div class="pt-3">
        <button type="button" class="block bg-red-600 text-white font-semibold text-lg rounded-3xl w-full py-2" aria-label="Continue to payment" on:click={() => window.location.href = `/loginService?redirect_to=${encodeURIComponent(window.location.href)}`}>Continue</button>
    </div>
</div>
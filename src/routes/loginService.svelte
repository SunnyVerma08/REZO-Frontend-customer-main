<script>
    import RezoLogo from '../../static/img/rezo-black-87x32.png';
    import HappyMotorPNG from '../../static/img/happy-motor-male.jpg';
    import ServiceLayout from '../Layout/ServiceLayout.svelte';
    import Backdrop from '../components/Backdrop.svelte';
    import IntlFlagsModal from '../components/IntlFlagsModal.svelte';

   // let flag = import('../../static/img/icons/in.svg')

    let IntlProp = {
        visible: !1,
        code: '+91',
        flag: '../../static/img/icons/in.svg'
    }

    const showIntlFlag = () => {
        IntlProp = { ...IntlProp, visible: !IntlProp.visible }
    }
</script>

<ServiceLayout header={false} backgroundImage={HappyMotorPNG}>
    <div class="block absolute w-full top-0 left-0 bottom-0">
        <div class="relative text-center p-6 shadow-lg bg-white w-96 mt-16 mx-auto mb-4 rounded-md">
            <div class="header">
                <div class="absolute top-5 left-6">
                    <span class="h-4 w-4 inline-block cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </span>
                </div>
                <div class="pb-3">
                    <img src={RezoLogo} class="h-8 filter invert inline-block" alt=" Rezo Logo" />
                </div>
            </div>

            <div class="content">
                <div class="text-lg font-semibold pb-2">Enter your mobile number</div>
                <div class="text-sm font-normal text-gray-400">A 4-digit OTP will be sent on SMS</div>
                <div class="relative mt-4 rounded-md bg-white border border-gray-300 h-12 w-full table">
                    <div class="relative w-14 inline-block align-middle right-1 border-r border-gray-300 cursor-pointer">
                        <div class="float-left" on:click={showIntlFlag}>
                            <img src={IntlProp.flag} alt="Country" class="h-6 w-6 inline-block align-middle" />
                            <span class="h-4 w-4 inline-block align-middle text-gray-300 ml-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div class="inline-block align-middle opacity-50 text-lg px-1">{IntlProp.code}</div>
                    <input type="tel" autocomplete="off" class="outline-none bg-white rounded-md h-11 border-0 w-2/4 inline-block align-middle opacity-50 text-lg" />
                </div>
            </div>
            <button type="button" class="bg-gray-300 mt-4 rounded-md text-gray-700 p-4 w-full">Next</button>
        </div>
        <!-- <div class=" flex justify-center items-center m-40">
            <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
        </div> -->
    </div>
    <Backdrop show={IntlProp.visible} component={IntlFlagsModal} props={IntlProp} on:close={showIntlFlag} bind:prop={IntlProp}  />
</ServiceLayout>
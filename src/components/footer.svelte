<script>
    import { goto } from '$app/navigation';
    import RezoBlackLogo from '../../static/img/rezo-black-87x32.png'

    const footerStyle = 'flex flex-1 items-center justify-between flex-col md:flex-row md:space-y-0';
</script>

<footer class="bg-gray-800 px-10 py-6 sm:px-24">
    <div class={`${footerStyle} space-y-1.5 border-b pb-4`}>
        <div class="relative">
            <ul class="flex space-x-6">
                <li class="text-white font-light text-base"> 
                    <a href='/about'>About Rezo</a> 
                </li>
                <li class="text-white font-light text-base"> 
                    <a href='/about'>Offers</a> 
                </li>
                <li class="text-white font-light text-base"> 
                    <a href='/about'>Location</a> 
                </li>
                <li class="text-white font-light text-base"> 
                    <a href='/contact'>Contact</a> 
                </li>
            </ul>
        </div>
        <div class="flex space-x-6">
            <a href='/#' class="text-white font-medium text-base">Book a service</a>
            <a href='/#' class="text-white font-medium text-base">Become a mechanic</a>
        </div>
    </div>
    
    <div class={`${footerStyle} space-y-2 pt-4`}>
        <div class="flex-shrink-0">
            <img src={RezoBlackLogo} alt="Rezo Black Background 82x32" />
        </div>
        <span class="text-white text-xs font-light text-center">Copyright &copy; 2021 Lenergy Mobility India. All Right Reserved</span>
    </div>
</footer>
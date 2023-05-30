<script>
    import Mark from '../../static/img/icons/mark.svg';
    import { apiCall, appStore, errorStore } from '../apiCallStore';
    import { isEmpty } from 'lodash';

    export let classes;
    export let defaultProp = null;

    let coords = [];
    let locationState = {
        coords: {}
    }
    
    const getDistance = (lat1, lng1, lat2, lng2) => {
        const R = 6371e3;
        const lt1 = lat1 * Math.PI / 180;
        const lt2 = lat2 * Math.PI / 180;
        const dLt1 = (lat2 - lat1) * Math.PI / 180;
        const dLng1 = (lng2 - lng1) * Math.PI / 180;

        const a = Math.sin(dLt1 / 2) * Math.sin(dLt1 / 2) +
                  Math.cos(lt1) * Math.cos(lt2) * 
                  Math.sin(dLng1 / 2) * Math.sin(dLng1 / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const d = R * c;
        return Math.floor(d / 1000);
    }

    const success = async position => {
        await apiCall('getGeoLocation', { body: { lat: position.coords.latitude, lng: position.coords.longitude } });
        await apiCall('workshopnearme', { body: { lat: position.coords.latitude, lng: position.coords.longitude, distance: 10000 } })
        locationState = { ...locationState, coords: position.coords }
    }

    const error = () => {
        alert('Unable to fetch the current location');
    }

    const getCurrentPosition = e => {
        const { detectLocation } = e.currentTarget.dataset;
        defaultProp = { ...defaultProp, loading: !0 }
        
        if('auto' === detectLocation){
            if('geolocation' in navigator){
                navigator.geolocation.getCurrentPosition(success, error);
            }else{
                alert('Geolocation API not supported in your browser.')
            }
        }else{
            defaultProp = { time: !0, backdrop: !1, detectAutoLocation: !1 }
        }
    }   

    $:{
        if($appStore.workshopNearMe){
            const [dist] = $appStore.location;
            let nearByWorkShop = {};
            let minDist = Number.MAX_SAFE_INTEGER; 
            $appStore.workshopNearMe.forEach(w => {
                const [x, y] = w.location.coordinates;
                const d = getDistance(x, y, dist.latitude, dist.longitude);
                if(minDist > d){
                    minDist = d;
                    nearByWorkShop = { ...w, dist: d };
                }
            })
            defaultProp = { ...defaultProp, geolocation: dist, workshop: nearByWorkShop, time: !0, backdrop: !1, detectAutoLocation: !0, loading: !1 }
        }
    }

    $:{
        if(!isEmpty($errorStore)){
            const { data: { message } } = $errorStore;
            alert(message);
            defaultProp = { ...defaultProp, backdrop: !1 }
        }
    }

</script>

<div class={`fixed bg-white w-full max-w-xl left-0 m-0 block transition-all delay-200 opacity-70 ${classes}`}>
    <div class="p-4 leading-5 text-center text-gray-600 text-sm">
        <img src={Mark} alt="Location Point" height={48} width={48} class="inline" />
        <div class="text-lg font-bold text-black m-3">We need your location</div>
        <p class="m-3 text-gray-600 text-lg">
            Allow location access on the next step for 
            <span class="font-bold">accurate pickup</span> &
            <span class="font-bold">faster booking</span>
        </p>
        <div class="footer">
            <button type="button" class="block w-full bg-black font-medium text-lg m-3 ml-0 h-11 border-0 text-yellow-500" on:click={getCurrentPosition} data-detect-location="auto">{'Continue to next step'}</button>
        </div>
        <a href='#/location-manually' class="font-medium text-lg text-indigo-600" data-detect-location="manual" on:click={getCurrentPosition}>Enter Location Manually</a>
    </div>
</div>
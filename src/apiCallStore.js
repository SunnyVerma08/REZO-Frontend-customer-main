/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { writable } from 'svelte/store';
import axios from 'axios';
import { SERVERADDRESS, API_URL } from './checkAuth';
export const indexServices = writable({});
export const planServices = writable({});
export const appStore = writable({ loading: !0 });
export const errorStore = writable({})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types


export const indexServicesApi = async () => {
	try {
		const res = await axios({
			url: `${SERVERADDRESS}/api/v1/services`
		});

		if (res.data.status === 'success') {
			indexServices.set(res.data.data.data);
			return true;
		}
	} catch (err) {
		// console.log('error', err.response.data.message);
	}
};

export const geolocation = async () => {
	try{
		const res = await axios({ url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyD4pnDBFHMFYPwlMDb9Xq1hfbZJ2fMUMrg' })
		const json = await res.json();
		console.log(json)
	}catch(err){
		console.log(err)
	}
}

export const indexServicesApiData = async (data) => {
	try {
		const res = await axios({
			url: `${SERVERADDRESS}/api/v1/services?planName=${data}`
		});

		if (res.data.status === 'success') {
			planServices.set(res.data.data.data);
			return true;
		}
		console.log(res);
	} catch (err) {
		// console.log('error', err.response.data.message);
	}
};

export const getBrands = async () => {
	try{
		const res = await axios({
			url: `${API_URL}/public/brand`
		})
		if(res.data.status === 'success'){
			appStore.update(b => ({ ...b, brands: res.data.data }))
			return true;
		}
	}catch(err){
		console.log(err)
	}
}

export const apiCall = async (action, params = {}) => {
	try{
		let config = null;
		let key = '';
		appStore.update(b => ({ ...b, loading: !0 }))
		switch(action){
			case 'getBrands':
				config = {
					url: `${API_URL}/public/brand`
				}
				key = 'brands';
			break;
			case 'getModel':
				config = {
					url: `${API_URL}/public/vehicle?_id=${params.model_id}`
				}
				key = 'model';
			break;
			case 'getGeoLocation':
				config = { 
					url: `${API_URL}/services/geoLocationQuery`,
					data: params.body,
					method: 'POST'
				}
				key = 'location'
			break;
			case 'workshopnearme':
				config = { 
					url: `${API_URL}/services/geoLocationQuery/workshopNearMe`,
					data: params.body,
					method: 'POST'
				}
				key = 'workshopNearMe'
				break;
			default: 
				config = { url: `${API_URL}/public/vehicle?brand=${params.brand}` }
				key = 'models'
			break;
		}

		const res = await axios(config);
		if(res.data.status === 'success'){
			appStore.update(b => ({ ...b, [key]: res.data.data, loading: !1 }))
			return true;
		}
	}catch(err){
		const { status, data} = err.response;
		errorStore.set({
			status: status,
			data
		});
	}
}
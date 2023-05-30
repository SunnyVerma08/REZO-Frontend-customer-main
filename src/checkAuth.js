import { writable } from 'svelte/store';
import axios from 'axios';

export const isUserLoggedIn = writable({});
export const USERDATA = writable({});
export const USERHEADERS = writable({});
export const SERVERADDRESS = 'http://18.222.68.126:3000';
export const API_URL = SERVERADDRESS+'/api/v1';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const ch3ckLoggedIn = async () => {
	// 1) Get login data from localStorage
	const userLoginData = JSON.parse(localStorage.getItem('userLoginData'));

	// 2) Check Login Data with API call
	if (userLoginData && userLoginData.token) {
		// 2) a) define headers
		const headers = {
			Authorization: `Bearer ${userLoginData.token}`
		};
		USERHEADERS.set(headers);
		// b) Call API with headers
		try {
			const res = await axios({
				url: `${SERVERADDRESS}/api/v1/users/auth/me`,
				headers
			});

			if (res.data.status === 'success') {
				isUserLoggedIn.set(true);
				USERDATA.set(res.data.data);
				return true;
			}
			console.log(res);
		} catch (err) {
			console.log('error', err.response.data.message);
		}
	}
};

export const APICall = async (urlPath) => {
	// 1) Get login data from localStorage
	const userLoginData = JSON.parse(localStorage.getItem('userLoginData'));

	if (userLoginData && userLoginData.token) {
		// 2) a) define headers
		const headers = {
			Authorization: `Bearer ${userLoginData.token}`
		};

		// define URL
		const url = `${SERVERADDRESS}${urlPath}`;
		// console.log(url);

		// b) Call API with headers
		try {
			const res = await axios({
				url,
				headers
			});

			if (res.data.status === 'success') {
				return res;
			}
			console.log(res);
		} catch (err) {
			// console.log('error', err.response.data.message);
			return err;
		}
	}
	return -1;
};

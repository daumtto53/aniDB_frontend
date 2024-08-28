import axios from 'axios';

export const discoverAxios = axios.create({
	baseURL: `${import.meta.env.VITE_BASEURL}/discover`,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
});

export const infoAxios = axios.create({
	baseURL: `${import.meta.env.VITE_BASEURL}/info`,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true

});
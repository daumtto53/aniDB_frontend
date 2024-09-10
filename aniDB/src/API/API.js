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

export const advancedSearchAxios = axios.create({
	baseURL: `${import.meta.env.VITE_BASEURL}/advancedSearch`,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
});

export const articleAxios = axios.create({
	baseURL: `${import.meta.env.VITE_BASEURL}/article`,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
});

export const upvoteAxios = axios.create({
	baseURL: `${import.meta.env.VITE_BASEURL}/upvote`,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
});

export const apiAxios = axios.create({
	baseURL: `${import.meta.env.VITE_BASEURL}/api`,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
});


export const loginAxios = axios.create({
	baseURL: `${import.meta.env.VITE_BASEURL}/login`,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
});
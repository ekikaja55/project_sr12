// src/lib/api/axios.ts
import axios, { type AxiosInstance } from 'axios';

const baseURL = import.meta.env.MODE === 'production'
	? import.meta.env.VITE_API_URL_PROD
	: import.meta.env.VITE_API_URL_DEV;

export const api: AxiosInstance = axios.create({
	baseURL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json'
	}
});

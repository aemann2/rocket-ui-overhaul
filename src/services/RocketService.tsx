import axios from 'axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';
const serviceUrl = `${SERVICES_URL}/rockets`;

const api = axios.create();

const rocketService = {
	get: (rocketId: string) => api.get(`${serviceUrl}/${rocketId}`),
};

export default rocketService;

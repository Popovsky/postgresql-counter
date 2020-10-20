import axios from 'axios';

const apiInstance = axios.create({
    baseURL: `http://localhost:${process.env.PORT ?? 5000}/api`,
});

export const createNextCounterState = data => apiInstance.post('/counter', data);
export const getCounterState = () => apiInstance.get('/counter');

export default apiInstance;

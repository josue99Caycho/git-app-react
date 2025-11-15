import axios from 'axios';

export const giphyApi = axios.create({
    baseURL: import.meta.env.VITE_GIPHY_PATH,
    params: {
        api_key: import.meta.env.VITE_GIPHY_API_KEY,
        limit: 10,
        lang: 'es'
    }
});
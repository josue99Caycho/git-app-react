import axios from 'axios';
import type { Gif } from "../Interfaces/gif.interface";
import type { GiphyResponse } from "../Interfaces/giphy.response";

export const getGifByQuery = async (query: string): Promise<Gif[]> => {

    const url = `https://api.giphy.com/v1/gifs/search`;
    const { data: responseGiphy } = await axios.get<GiphyResponse>(url, {
        params: {
            api_key: 'lEizNy6VgEZV0Yd4NfK40fqXIfqWM75B',
            q: query,
            limit: 10,
            lang: 'es'
        }
    });

    return responseGiphy.data.map(item => ({
        id: item.id,
        title: item.title,
        url: item.images.original.url,
        height: Number(item.images.original.height),
        width: Number(item.images.original.width)
    }))

}
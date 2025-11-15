import type { Gif } from "../Interfaces/gif.interface";
import type { GiphyResponse } from "../Interfaces/giphy.response";
import { giphyApi } from '../../Api/giphy.api';

export const getGifByQuery = async (query: string): Promise<Gif[]> => {

    const { data: responseGiphy } = await giphyApi.get<GiphyResponse>('/search', {
        params: { q: query }
    });

    return responseGiphy.data.map(item => ({
        id: item.id,
        title: item.title,
        url: item.images.original.url,
        height: Number(item.images.original.height),
        width: Number(item.images.original.width)
    }))

}
import { useRef, useState } from "react";
import { getGifByQuery } from "../Actions/get-gif-by-query";
import type { Gif } from "../Interfaces/gif.interface";

export const useGifs = () => {

    // State - Búsqueda de Gifs
    const [searchTearms, setSearchTerms] = useState<string[]>([]);

    // State - Listado de Gifs
    const [gifList, setGifList] = useState<Gif[]>([])

    const previusTermins = useRef<Record<string, Gif[]>>({});

    const handlerClicked = (terms: string) => {

        console.log(terms);

        if(previusTermins.current[terms]) {
            setGifList(previusTermins.current[terms]);
        }
    }

    const handlerSearch = async (search: string) => {

        console.log('La búsqueda fue: ', search);

        if (!search) {
            console.log('La búsqueda es vacía');
            return;
        }

        const newSearch = search.trim().toLowerCase();

        // Buscar terminos con el mismo nombre
        const existeTermino = searchTearms.some((term: string) => term.toLowerCase() === newSearch);

        if (existeTermino) {
            console.log('El termino ya existe y no se agrega');
            return;
        }

        // Agregar nuevo elemento a la lista, solo deben de existir hasta 8 elementos dentro de la lista
        const newSearchList = [newSearch, ...searchTearms].slice(0, 8);
        setSearchTerms(newSearchList);

        // Llamar api de giphy
        const response = await getGifByQuery(newSearch);
        console.log(response);

        // Setear nueva resultado en la lista de gifs
        setGifList(response);

        previusTermins.current[newSearch] = response;
    }

    return {
        searchTearms,
        gifList,
        handlerClicked,
        handlerSearch
    }
}
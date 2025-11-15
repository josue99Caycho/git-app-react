import { useState } from "react"
import { getGifByQuery } from "./Gifs/Actions/get-gif-by-query"
import { GifList } from "./Gifs/Components/GifList"
import { PreviousSearches } from "./Gifs/Components/PreviousSearches"
import { CustomHeader } from "./Shared/Components/CustomHeader"
import { CustomSearch } from "./Shared/Components/CustomSearch"
import type { Gif } from "./Gifs/Interfaces/gif.interface"

export const GifsApp = () => {

    // State - Búsqueda de Gifs
    const [searchTearms, setSearchTerms] = useState<string[]>([]);

    // State - Listado de Gifs
    const [gifList, setGifList] = useState<Gif[]>([])

    const handlerClicked = (terms: string) => {
        console.log(terms);
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
    }

    return (
        <>

            {/* Header */}
            <CustomHeader
                title="Buscador de Gifs"
                description="Descubre y comparte el gif perfecto"
            />

            {/* Search */}
            <CustomSearch
                description="Buscar gifs"
                onQuerySearch={handlerSearch}
            />

            {/* Búsquedas previas */}
            <PreviousSearches searches={searchTearms} onLoadClicked={handlerClicked} />

            {/* Gifs */}
            <GifList gif={gifList} />

        </>
    )
}

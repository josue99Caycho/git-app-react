import { useState } from "react"
import { GifList } from "./Gifs/Components/GifList"
import { PreviousSearches } from "./Gifs/Components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./Shared/Components/CustomHeader"
import { CustomSearch } from "./Shared/Components/CustomSearch"

export const GifsApp = () => {

    const [searchTearms, setSearchTerms] = useState([]);

    const handlerClicked = (terms: string) => {
        console.log(terms);
    }

    const handlerSearch = (search: string) => {
        console.log('La búsqueda fue: ', search);
        const newSearchList = [search, ...searchTearms];
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
            <PreviousSearches searches={searchTearms} onLoadClicked={handlerClicked}/>

            {/* Gifs */}
            <GifList gif={mockGifs} />

        </>
    )
}

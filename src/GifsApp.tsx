import { GifList } from "./Gifs/Components/GifList"
import { PreviousSearches } from "./Gifs/Components/PreviousSearches"
import { useGifs } from "./Gifs/Hooks/useGifs"
import { CustomHeader } from "./Shared/Components/CustomHeader"
import { CustomSearch } from "./Shared/Components/CustomSearch"

export const GifsApp = () => {

  const { searchTearms, gifList, handlerClicked, handlerSearch } = useGifs();

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

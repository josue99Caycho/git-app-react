import { useState, type KeyboardEvent} from "react";

interface CustomSearchProps {
    description: string;
    onQuerySearch: (search: string) => void;
}

export const CustomSearch = ({ description, onQuerySearch }: CustomSearchProps) => {

    const [search, setSearch] = useState('');

    const onHandlerEnter = (event: KeyboardEvent<HTMLInputElement>) => {

        if (event.key === 'Enter') {
            onQuerySearch(search)
        }
    }

    return (
        <div className="search-container">
            <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={onHandlerEnter}
                type="text"
                placeholder={description}
            />
            <button
            >
                Buscar
            </button>
        </div>
    )
}

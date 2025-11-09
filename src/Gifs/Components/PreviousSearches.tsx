import type { FC } from "react"

interface Props {
    searches: string[];
    onLoadClicked: (search: string) => void;
}

export const PreviousSearches: FC<Props> = ({ searches, onLoadClicked }) => {
    return (
        <div className="previous-searches">

            <h2>Búsquedas previas</h2>

            <ul className="previous-searches-list">
                {
                    searches.map(searchItem => (
                        <li 
                            key={searchItem} 
                            onClick={ ()=> onLoadClicked(searchItem)}
                        >
                            {searchItem}
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}


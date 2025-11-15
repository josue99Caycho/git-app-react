import { type Gif } from "../Interfaces/gif.interface" 

interface GifProps {
    gif: Gif[]
}

export const GifList = ({ gif }: GifProps) => {
    return (
        <div className="gifs-container">

            {
                gif.map(gif => {

                    return (
                        <div key={gif.id} className="gif-card">
                            <img src={gif.url} alt={gif.title} />
                            <h3>{gif.title}</h3>
                            <p>{gif.width}x{gif.height} (1.5 mb)</p>
                        </div>
                    )

                })
            }

        </div>
    )
}


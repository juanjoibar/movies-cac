import peliculas from "./peliculas.json"
import "./PeliculasGrid.css"
import { PeliculasCard } from "./PeliculasCard"
export const PeliculasGrid = ()=> {

    
    return(
        <ul className="moviesGrid">
            {peliculas.map((pelicula)=>(

                <PeliculasCard key={pelicula.id} pelicula={pelicula}/>
            )
            
            )}
        </ul>
    )
}
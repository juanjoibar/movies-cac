//import peliculas from "./peliculas.json"
import {get}from "../utils/httpCliente"
import { useState,useEffect } from "react"
import "./PeliculasGrid.css"
import { PeliculasCard } from "./PeliculasCard"
export const PeliculasGrid = ()=> {
    const [peliculas,setPeliculas] = useState([])
    useEffect(()=>{
        get("/discover/movie").then((data)=>{
            setPeliculas(data.results)
        })
    })    
    
    return(
        <ul className="moviesGrid">
            {peliculas.map((pelicula)=>(

                <PeliculasCard key={pelicula.id} pelicula={pelicula}/>
            )
            
            )}
        </ul>
    )
}
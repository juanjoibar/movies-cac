import {get} from "../utils/httpCliente"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./PeliculaDetalle.css"

export const PeliculaDetalle = ()=>{
    const {peliculaid} = useParams()
    const [pelicula,setPelicula]= useState(null)
    useEffect(()=>{
        get(`/movie/${peliculaid}`).then((data)=>{
            setPelicula(data)
            console.log(data);
        })
    },[peliculaid])  

    if(!pelicula){
        return null
    }
    const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`
    return (
        <>
        <div className="container">
            <h1 className="titulo">{pelicula.title}</h1>
        <p>{pelicula.description}</p>
        <img src={imgURL} alt=""></img>
        <p>{pelicula.overview}</p>
        <p>
           Generos: 
           {pelicula.genres.map((genre)=>genre.name+',')}
        </p>
        </div>
        </>
    )
}
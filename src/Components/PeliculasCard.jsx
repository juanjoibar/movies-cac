import React from 'react'
import "./PeliculasCard.css"
import{Link} from 'react-router-dom'
export const  PeliculasCard=({pelicula})=> {
    const imgUrl = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`
  return (
    <li className='moviesCard'>
      <Link to={`/pelicula/${pelicula.id}`}>
       <img className='movieImage' src={imgUrl} alt={pelicula.title} />
        <div>
        {pelicula.title}
        </div>
      </Link>
        
    </li>
  )
}

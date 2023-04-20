const API = "https://api.themoviedb.org/3" 


export const get = (path)=>{
    return fetch(API+path,{
        headers:{
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWYyODAyNjAxMjM1N2I1NDJmMmIzNGRkNWU3MTdhNSIsInN1YiI6IjY0MjM3NWRkOWQyYjYzMDA5NzcxOTgyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zpic2t4ML78VXS6zN7hAcUiEu1kaFw482T0n8FG7VhQ",
            "Content-Type": "application/json;charset=utf-8",
        }

    }).then((results)=> results.json())
}
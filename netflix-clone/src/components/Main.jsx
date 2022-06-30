import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'

const Main  = () => {
    const [movies,setMovies] = useState([])

    const movie = movies[Math.floor(Math.random()*movies.length)]

    useEffect(() => {
      fetch(requests.requestHorror)
  .then(response => response.json())
  .then(data => setMovies(data.results));
        // axios.get(requests.requestHorror).then(() =>{
        //     setMovies(response.data.results)
        // }).catch(e => {
        //     console.log(e);
        // })
    },[])
    console.log(movie)
  return (
    <div className="text-white">{movie.id}</div>
  )
}

export default Main
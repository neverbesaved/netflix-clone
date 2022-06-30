import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'

const Main  = () => {
    const [movies,setMovies] = useState([])

    const movie = movies[Math.floor(Math.random()*movies.length)]

    useEffect(() => {
      try {
      fetch(requests.requestHorror)
  .then(response => response.json())
  .then(data => setMovies(data.results));
} catch(e) {
  console.log(e)
}
        // axios.get(requests.requestHorror).then(() =>{
        //     setMovies(response.data.results)
        // }).catch(e => {
        //     console.log(e);
        // })
    },[])
    console.log(movie)
  return (
    <div className="text-white">ok</div>
  )
}

export default Main
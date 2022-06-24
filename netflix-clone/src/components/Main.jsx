import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'

const Main  = () => {
    const [movies,setMovies] = useState([])

    const movie = movies[Math.floor(Math.random()*movies.length)]

    useEffect(() => {
        axios.get(requests.requestHorror).then(() =>{
            setMovies(response.data.results)
        }).catch(e => {
            console.log(e);
        })
    },[])
    console.log(movie)
  return (
    <div></div>
  )
}

export default Main
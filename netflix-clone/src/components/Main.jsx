import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'

const Main  = () => {
    const [movies,setMovies] = useState([])

    useEffect(() => {
        axios.get(requests.requestTopRate).then(() =>{
            setMovies(response.data.results)
        }).catch(e => {
            console.log(e);
        })
    },[])
    console.log(movies)
  return (
    <div></div>
  )
}

export default Main
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const Row = (props) => {
  const [movies, setMovies] = useState([]);
  console.log(props.fetchURL);
  useEffect(() => {
    try {
      fetch(props.fetchURL)
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    } catch (e) {
      console.log(e);
    }
  }, [props.fetchURL]);

const slideLeft = () => { 
    let slider=document.getElementById('slider' + props.rowID)
    slider.scrollLeft = slider.scrollLeft - 500;
}

const slideRight = () => { 
    let slider=document.getElementById('slider' + props.rowID)
    slider.scrollLeft = slider.scrollLeft + 500;
}

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{props.title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} className="text-black bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
        <div
          id={"slider" + props.rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight onClick={slideRight} className="text-black bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
      </div>
    </>
  );
};

export default Row;

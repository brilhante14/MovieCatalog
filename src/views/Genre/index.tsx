import React from 'react';
import { useParams } from 'react-router-dom';
import json from "../../data/genres.json"

import Popular from '../Popular';

const Genre = () => {
  let params = useParams();
 
  function getGenreTitle():string{
    const genreFound = json.genres?.find(genre => genre.id === parseInt(params.genreId ? params.genreId : ""));
    console.log(genreFound)
 
    return genreFound? genreFound.name : "";
 }

 function getGenreURL(){
  return `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${params.genreId}&sort_by=vote_average.desc&vote_count.gte=10` 
}

  return (

    <Popular categorie={{
      title: getGenreTitle(),
      url: getGenreURL()
    }} />
  );
}

export default Genre;

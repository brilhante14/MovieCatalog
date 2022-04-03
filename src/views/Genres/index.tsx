import React from 'react';
import { useParams } from 'react-router-dom';
import json from "../../data/genres.json"

import Popular from '../Popular';

import './styles.css';


const Gender = () => {
  let params = useParams();
 
  function getGenderTitle():string{
    const genreFound = json.genres?.find(genre => genre.id === parseInt(params.genreId ? params.genreId : ""));
    console.log(genreFound)
 
    return genreFound? genreFound.name : "";
 }

 function getGenderURL(){
  return `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${params.genreId}&sort_by=vote_average.desc&vote_count.gte=10` 
}

  return (

    <Popular categorie={{
      title: getGenderTitle(),
      url: getGenderURL()
    }} />
  );
}

export default Gender;

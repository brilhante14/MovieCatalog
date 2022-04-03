import React from 'react';
import { useParams } from 'react-router-dom';

import Popular from '../Popular';

import './styles.css';


const Search = () => {
  let params = useParams();

  function getSearchURL(){
   return `search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${params.searchQuery}` 
 }

  return (

    <Popular categorie={{
      title: "Search results",
      url: getSearchURL()
    }} />
  );
}

export default Search;

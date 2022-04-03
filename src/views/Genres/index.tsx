import React from 'react';
import { Link } from 'react-router-dom';
import json from "../../data/genres.json"

import './styles.css';


const Genres = () => {

  return (
    <div className='genres-page-container'>
      <h1 style={{margin: "1rem"}}>Genres available</h1>
      <div className='genres-container'>
        {json.genres.map((genre) => (
          <Link style={{textDecoration: "none"}} to={`/genres/${genre.id}`}>
            <div key={genre.id} className="genres-items">{genre.name}</div>
          </Link>
        ))}
      </div>

    </div>
    
  );
}

export default Genres;

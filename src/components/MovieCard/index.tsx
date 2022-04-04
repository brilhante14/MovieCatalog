import React from "react";
import json from "../../data/genres.json"
import { Link } from "react-router-dom";

import "./styles.css"

type Props = {
   id: number,
   title: string,
   poster_path?: string,
   release_date: string,
   genreIds: number[]
}

export default function MovieCard(props: Props){
   const getGenreById = (id: number):string => {
      const genreFound = json.genres.find(genre => genre.id === id);
   
      return genreFound? genreFound.name : "";
   }

   return(
      <Link to={`/movie/${props.id}}`}  className="card-container">
         <img 
            src={`https://image.tmdb.org/t/p/w185${props.poster_path}`} 
            alt={`Poster of ${props.title} movie`} 
            className="poster"
            />
            
         <br/>
         
         <div  className="card-details">
            <span className="subtext upper">{props.release_date}</span>
            <br/>
            <span className="title">{props.title}</span>
            <br/>
            <div>
               {props.genreIds.map((genreId: number, index) => 
                  <span key={genreId} className="subtext">{getGenreById(genreId)}{index < props.genreIds.length - 1 ? ", " : null}</span>
                  )}
            </div>
         </div>
      </Link>
   )
}
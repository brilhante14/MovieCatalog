import React from "react";
import { Link } from "react-router-dom";

import "./styles.css"

type genre = {
   id: number,
   name: string
}

type productionCountry = {
   iso_3166_1: string,
   name: string
}

type Props = {
   id: number,
   title: string,
   poster_path?: string,
   release_date: string,
   genres: genre[],
   productionCountries: productionCountry[]
}

export default function MovieCard(props: Props){
   return(
      <Link to={`/movie/${props.id}}`}  className="card-container">
         <img 
            src={`https://image.tmdb.org/t/p/w185${props.poster_path}`} 
            alt={`Poster of ${props.title} movie`} 
            className="poster"
            />
            
         <br/>
         <span className="subtext upper">{props.productionCountries[0].iso_3166_1}, {props.release_date}</span>
         <br/>
         <span className="title">{props.title}</span>
         <br/>
         <div>
            {props.genres.map((genre: genre, index) => 
               <span key={genre.id} className="subtext">{genre.name}{index < props.genres.length - 1 ? ", " : null}</span>
               )}
         </div>
      </Link>
   )
}
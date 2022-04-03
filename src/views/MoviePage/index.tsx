import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';

import api from "../../services/api";

import "./styles.css"

export interface MovieInfo{
   title: string,
   genres: [{
      name: string,
      id: number
   }],
   backdrop_path: string,
   poster_path: string,
   overview: string,
   production_companies: [{
      id: number,
      logo_path: string,
      name: string,
      origin_country: string
   }]
   adult: boolean,
   release_date: string,
   runtime: number,
   vote_average: number,
}

const MoviePage = () => {
   const [movie, setMovie] = useState<MovieInfo | null>(null);   
   let params = useParams();

   useEffect(() => {
      async function getMovieInfo() {
        const response = await api.get(`movie/${params.movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        setMovie(response.data);
      }
        
      getMovieInfo();
   }, [params.movieId]);

   function getH(duration: number){
      return Math.ceil(duration/60);
   }

   function getM(duration: number){
      return duration%60;
   }

   return(
      <div className="movie-page-container">
         <div className="left-panel">
            {movie? <img className="movie-page-img" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={`Poster of ${movie.title}`} /> : <p>Loading</p>}
            <p className="movie-details">{movie? movie.title : "Loading"}</p>
            <p className="movie-details">Duration: {movie? `${getH(movie.runtime)}h${getM(movie.runtime)}m` : ":"}</p>
            <span className="movie-details">{movie?.vote_average} <AiFillStar color="yellow" size="1rem" /></span>
            
         </div>
         <div className="right-panel">
            {movie?.overview}
            <p style={{marginTop: "1rem"}}>Produced by:</p>
            <div className="companies-container">
               {movie?.production_companies.map((companie)=>(
               <img 
                  className="companies-image"
                  src={`https://image.tmdb.org/t/p/w92${companie.logo_path}`} 
                  alt={`Logo of ${companie.name}`} 
                  key={companie.id}
               />
               ) )}
            </div>
         </div>
      </div>
   );
}

export default MoviePage;
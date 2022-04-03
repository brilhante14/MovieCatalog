import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";

import { Movie } from "../Home";
import api from "../../services/api";
import MovieCard from "../../components/MovieCard";

import "./styles.css";

export interface Categorie {
   url: string,
   title: string
}

type Props = {
   categorie: Categorie
}

const Popular = (props: Props) => {
   const [page, setPage] = useState(1);
   const [movies, setMovies] = useState<Movie[]>([]);
   const [pageNumber, setPageNumber] = useState(1);

   useEffect(() => {
      async function loadLatestMovies() {
        const response = await api.get(props.categorie.url + `&page=${page}`);
        setMovies(response.data.results);
        setPageNumber(response.data.total_pages);
      }
        
      loadLatestMovies();
   }, [page, pageNumber, props.categorie.url]);

   return(
      <div className="popular-container">
         <h1>{props.categorie.title}</h1>

         <div className="movie-container">
            {movies.map((movie) => (
               <MovieCard 
                  key={movie.id}
                  id={movie.id}
                  genres={[{id: 16, name: "Animation"}, {id: 17, name: "Family"}, {id: 18, name: "Comedy"}, {id: 19, name: "Fantasy"}]}
                  productionCountries={[{iso_3166_1: "US", name: "United States of America"}]} 
                  title={movie.title} release_date={movie.release_date}
                  poster_path={movie.poster_path} 
               />
            ))}
         </div>

         <div className="pagination">
         <Pagination
            count={pageNumber}
            page={page}
            onChange={(e, pageSelected) => setPage(pageSelected)}
            variant="text"
            color="primary"
            renderItem={(item) => (<PaginationItem {...item}  style={{color: "white"}} className="pagination" />)}
         />
         </div>
      </div>
   );
}

export default Popular;
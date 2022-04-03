import React from "react";
import { Button } from "react-bootstrap";
import { Movie } from "../../views/Home";
import Carousel from 'react-elastic-carousel';
import MovieCard from "../MovieCard";

import chevronRight from '../../assets/chevron-right.svg'
import chevronLeft from '../../assets/chevron-left.svg'

import "./styles.css";
import { Link } from "react-router-dom";

var consts = {
   PREV: "PREV",
   NEXT: "NEXT",
   START: "flex-start",
   CENTER: "center",
   END: "flex-end"
 };

type Props = {
   title: string,
   movies: Movie[],
   category: string
}

function myArrow({ type, onClick, isEdge }: any) {
   const pointer = type === consts.PREV ? `${chevronLeft}` : chevronRight
   return (
     <Button variant="Link" onClick={onClick} className="carouselArrows" disabled={isEdge}>
         <img src={pointer} alt="Search Button"  />
     </Button>
   )
 }

export default function MovieList(props: Props) {
   const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 900, itemsToShow: 4 },
    ];

   return(
      <div  className="movie-list-container" style={{alignItems: 'center'}}>
         <div className="category-container">
            <p className="category-name">{props.title}</p>

            <Button 
               className="category-btn" 
               style={{color: "#FFF", fontFamily: "Roboto", fontWeight: 400, fontSize: "18px", lineHeight: "28.13px"}} 
               variant="Link"
            >
               <Link to={`/${props.category}`} style={{color: "white", textDecoration:"none"}}>View all</Link></Button>
         </div>
         
         <Carousel 
            isRTL={false} 
            breakPoints={breakPoints} 
            renderArrow={myArrow} 
            itemsToShow={5} 
            pagination={false} 
            className="movie-list-carousel"
         >
         {props.movies
            .filter((movie) => {
               return movie.poster_path != null
            })
            .map((movie: Movie) => (
               <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path}
                  genreIds={movie.genre_ids}
                  release_date={movie.release_date}
               />
            ))}
               
               
         </Carousel>
      </div>
   );

}
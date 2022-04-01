import React from "react";
import { Button } from "react-bootstrap";
import { Movie } from "../../views/Home";
import Carousel from 'react-elastic-carousel';
import MovieCard from "../MovieCard";

import chevronRight from '../../assets/chevron-right.svg'
import chevronLeft from '../../assets/chevron-left.svg'

import "./styles.css";

var consts = {
   PREV: "PREV",
   NEXT: "NEXT",
   START: "flex-start",
   CENTER: "center",
   END: "flex-end"
 };

type Props = {
   title: string,
   movies?: Movie[]
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
      <div className="movie-list-container">
         <div className="category-container">
            <p className="category-name">{props.title}</p>

            <Button className="category-btn" style={{color: "#FFF", fontFamily: "Roboto", fontWeight: 400, fontSize: "24px", lineHeight: "28.13px"}} variant="Link">View all</Button>
         </div>
         
         <Carousel 
            isRTL={false} 
            breakPoints={breakPoints} 
            renderArrow={myArrow} 
            itemsToShow={5} 
            pagination={false} 
            className="movie-list-carousel"
         >
         {props.movies?.map((movie: Movie) => (
            <MovieCard
            key={movie.id}
            title={movie.title}
            genres={[{id: 16, name: "Animation"}, {id: 17, name: "Family"}, {id: 18, name: "Comedy"}, {id: 19, name: "Fantasy"}]}
            poster_path={movie.poster_path}
            productionCountries={[{iso_3166_1: "US", name: "United States of America"}]}   
            release_date={movie.release_date}
            />
            
            ))}
         </Carousel>
      </div>
   );

}
import React from "react";
import Carousel from 'react-elastic-carousel';
import { Link } from "react-router-dom";
import { Movie } from "../../views/Home";

import "./styles.css";

type Props = {
   movies?: Movie[]
}

const CarouselPanel = (props: Props) => {

   return(
      <div className="carousel-container">
         <Carousel 
            isRTL={false} 
            showArrows={false}
            enableAutoPlay={true}
            className="carousel-component" 
            autoPlaySpeed={7000}>
            {props.movies?.filter((movie: Movie) => {
               return movie.backdrop_path != null
            })
            .map((movie: Movie) => (
               <div className="carousel-inner" key={movie.id}>
                  <Link style={{textDecoration: "none", color: "#FFF"}} to={`/movie/${movie.id}`}>
                  <img 
                     src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} 
                     alt={`${movie.title} carousel poster`}
                     />
                     
                  <div className="caption">
                    <h4>{movie.title}</h4>
                    <p>{movie.overview.length>200? movie.overview.substring(0, 200)+"..." : movie.overview}</p>
                  </div>
                  </Link>
               </div>
            ))}
         </Carousel>
      </div>
   );
}

export default CarouselPanel;
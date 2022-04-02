import React, { useRef } from "react";
import Carousel from 'react-elastic-carousel';
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
            autoPlaySpeed={7000}>
            {props.movies?.map((movie: Movie) => (
               <div className="carousel-inner" key={movie.id}>
                  <img 
                     src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} 
                     alt={`${movie.title} carousel poster`}
                  />

                  <div className="caption">
                    <h4>{movie.title}</h4>
                    <p>{movie.overview.length>200? movie.overview.substring(0, 200)+"..." : movie.overview}</p>
                  </div>
               </div>
            ))}
         </Carousel>
      </div>
   );
}

export default CarouselPanel;
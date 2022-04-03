import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CarouselPanel from '../../components/CarouselPanel';
import MovieList from '../../components/MovieList';
import categories from '../../data/categories';

import api from '../../services/api';

import './styles.css';

export interface Movie {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path?: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}


const Home = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [latestMovies, setLatestMovies] = useState<Movie[] >([]);
  const [childrenMovies, setChildrenMovies] = useState<Movie[]>([]);
  const [dramaMovies, setDramaMovies] = useState<Movie[]>([]);
  const [actionMovies, setActionMovies] = useState<Movie[]>([]);
  const [romanceMovies, setRomanceMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .all(categories.map((categorie) => (
        api.get(categorie.url)
      )))
      .then(
        axios.spread((...responses) => {
          setPopularMovies(responses[0].data.results);
          setLatestMovies(responses[1].data.results);
          setChildrenMovies(responses[2].data.results);
          setDramaMovies(responses[3].data.results)
          setActionMovies(responses[4].data.results)
          setRomanceMovies(responses[5].data.results)
        })
      )
      .catch((err) => alert("Error ocurred while trying to get the movie lists"))
  }, []);

  return (
    <div >
      <CarouselPanel movies={popularMovies.slice(0, 5)} />
      <div className="container">
  
        <div id="popular"><MovieList category='popular' title={categories[0].title} movies={popularMovies} /></div>
        <div id="release"><MovieList category='release' title={categories[1].title} movies={latestMovies} /></div>
        <div id="children"><MovieList category='family' title={categories[2].title} movies={childrenMovies} /></div>
        <div id="drama"><MovieList category='drama' title={categories[3].title} movies={dramaMovies} /></div>
        <div id="action"><MovieList category='action' title={categories[4].title} movies={actionMovies} /></div>
        <div id="romance"><MovieList category='romance' title={categories[5].title} movies={romanceMovies} /></div>
      </div>
    </div>
  );
}

export default Home;

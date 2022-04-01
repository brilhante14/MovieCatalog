import React, { useEffect, useState } from 'react';
import NavBar from '../../components/INavbar';
import MovieList from '../../components/MovieList';

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
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

const Home = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[] | null>();

  useEffect(() => {
    async function loadLatestMovies() {
      const response = await api.get(`discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc&page=${page}`);

      setMovies(response.data.results);
    }

    loadLatestMovies();
  }, [page]);

  

  return (
    <div >
     <NavBar />
      
      <div className="container">

        <MovieList title='Popular' movies={movies? movies : undefined} />

        <ul>
          {movies?.map((movie: Movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      <div>
        <button onClick={() => setPage(page - 1)}>&lt;</button>
        <button onClick={() => setPage(page + 1)}>&gt;</button>
      </div>
      </div>
    </div>
  );
}

export default Home;
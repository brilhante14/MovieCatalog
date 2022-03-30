import React, { useEffect, useState } from 'react';
import NavBar from '../../components/INavbar';

import api from '../../services/api';

import './index.css';

interface Movie {
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

function Home() {
  const [movies, setMovies] = useState<Movie[]>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadLatestMovies() {
      const response = await api.get(`discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=release_date.desc&page=${page}`);

      setMovies(response.data.results);
    }

    loadLatestMovies();
  }, [page]);

  console.log(movies);

  return (
    <div >
     <NavBar />
      
      <div className="App-header">
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

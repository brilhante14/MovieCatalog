import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import NavBar from './components/INavbar';
import MovieByCategory from './views/MovieByCategory';
import MoviePage from './views/MoviePage';
import categories from './data/categories';
import Genre from './views/Genre';
import Search from './views/Search';
import Genres from './views/Genres';

const routes = () => {
    return(
         <BrowserRouter>
         <NavBar />

         <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="popular" element={<MovieByCategory categorie={categories[0]}/>} />
            <Route path="releases" element={<MovieByCategory categorie={categories[1]}/>} />
            <Route path="genres" element={<Genres />}/>
            <Route path="genres/:genreId" element={<Genre/>} />
            <Route path="search/:searchQuery" element={<Search/>} />
            <Route path="/movie/:movieId" element={<MoviePage />} />
            <Route
               path="*"
               element={
               <main style={{ padding: "1rem" }}>
                  <p>Oops.. there's nothing here!</p>
               </main>
               }
            />
         </Routes>
         </BrowserRouter>
    )
}

export default routes;
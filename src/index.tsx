import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './views/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    
    <Route path="/" element={<Home />}>

    </Route>
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


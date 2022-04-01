import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './views/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    
    <Route path="/" element={<Home />}>

    </Route>
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


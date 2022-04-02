import React from 'react';

import NavBar from './components/INavbar';
import Footer from './components/Footer';
import './App.css';

import Routes from './routes';

const App = () => {
  

  return (
    <div className="page-container">
       <NavBar />
      <div className="content">
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
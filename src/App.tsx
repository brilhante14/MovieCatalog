import React from 'react';

import Footer from './components/Footer';
import './App.css';

import Routes from './routes';

const App = () => {
  

  return (
    <div className="page-container">
      <div className="content">
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
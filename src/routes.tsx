import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';

const routes = () => {
    return(
      //   <BrowserRouter>
      //       <Routes>
      //           <Route path="/" exact component={Login} />
      //           <Route path="/dashboard" component={Dashboard} />
      //           <Route path="/new" component={New} />
      //       </Routes>
      //   </BrowserRouter>
         <BrowserRouter>
         <Routes>
           
           <Route path="/" element={<Home />}>
            
           </Route>
         </Routes>
         </BrowserRouter>
    )
}

export default routes;
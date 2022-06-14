import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Navbar from "../src/components/Navbar.jsx";
import Home from "../src/components/Home.jsx";
import Friend from "../src/components/Friend.jsx";
import Tour from "../src/components/Tour.jsx";
import Match from "../src/components/Match.jsx";
import {useState, useEffect} from 'react';
import Axios from 'axios';




const App=()=>{

return(
  <>

  
  <Navbar/>
  <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/friend" element={<Friend />} />
          <Route exact path="/tour" element={<Tour />} />
          <Route exact path="/match" element={<Match />} />
          {/* <Navigate to="/"/> */}
           

  </Routes>
  
  
  
  </>
 
);
};

export default App;

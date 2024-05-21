import React from 'react';
import './App.css';
import HomeGuest from './HomeScreen/HomeGuest.js';
import Test from './Test.js';
import JobMarket from './JobMarket/JobMarket.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route
              exact
              path="/"
              element={<HomeGuest />}
            />
            <Route
              path="/Test"
              element={<Test />}
              />
            <Route
              path="/JobMarket"
              element={<JobMarket />}
              />  
            <Route
              path="*"
              element={<Navigate to="/" />}
            />
        </Routes>
      </Router>                                  
    </>
    // <div className="App">
    //   <HomeGuest />
      
    // </div>
);
}

export default App;

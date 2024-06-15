import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobDetail from './pages/jobs/JobDetail';
import EnlistJob from './pages/jobs/EnlistJob';
import "./App.css";
// Import other components as needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*"  element={<JobDetail />} />
        <Route path="*"  element={<EnlistJob />} />
       
        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
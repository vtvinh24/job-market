import React from 'react';
import '../../assets/css/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <button className="create-job-button">Create Job</button>
      </div>
      <div className="stats-container">
        <div className="stat-box">
          <h3>253</h3>
          <p>Completed Jobs</p>
        </div>
        <div className="stat-box">
          <h3>3</h3>
          <p>Current Apply Job</p>
        </div>
        <div className="stat-box">
          <h3>7</h3>
          <p>Jobs Posted</p>
        </div>
      </div>
      <div className="job-section">
        <h4>Job Applied</h4>
        <div className="job-list"></div>
      </div>
      <div className="job-section">
        <h4>Job Completed</h4>
        <div className="job-list"></div>
      </div>
    </div>
  );
};

export default Dashboard;

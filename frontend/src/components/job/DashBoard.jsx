import React from 'react';
import '../../assets/css/Dashboard.css';
import useUserTotalCompletedJob from '../../hooks/useUserTotalCompletedJob';
import useUserTotalCurrentAppliedJob from '../../hooks/useUserTotalCurrentAppliedJob';
import useUserTotalCreatedJob from '../../hooks/useUserTotalCreatedJob';


const Dashboard = () => {
  const { count: completedCount, loading: completedLoading, error: completedError } = useUserTotalCompletedJob(1);
  const { count: appliedCount, loading: appliedLoading, error: appliedError } = useUserTotalCurrentAppliedJob(1);
  const { count: createdCount, loading: createdLoading, error: createdError } = useUserTotalCreatedJob(1);



  // console.log(count);
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <button className="create-job-button">Create Job</button>
      </div>
      <div className="stats-container">
        <div className="stat-box">
          {completedLoading ? (
            <h3>Loading...</h3>
          ) : completedError ? (
            <h3>Error: {completedError.message}</h3>
          ) : (
            <h3 className='completed'>{completedCount}</h3>
          )}
          <p>Completed Jobs</p>
        </div>
        <div className="stat-box">
          {appliedLoading ? (
            <h3>Loading...</h3>
          ) : appliedError ? (
            <h3>Error: {appliedError.message}</h3>
          ) : (
            <h3 className='applied'>{appliedCount}</h3>
          )}
          <p>Current Apply Job</p>
        </div>
        <div className="stat-box">
          {createdLoading ? (
            <h3>Loading...</h3>
          ) : createdError ? (
            <h3>Error: {createdError.message}</h3>
          ) : (
            <h3 className='created'>{createdCount}</h3>
          )}
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

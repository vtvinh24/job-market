import React from 'react';
import '../../assets/css/SideBar.css';

const Sidebar = ({ onMenuClick }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-back">
        <a href="#" className="back-link">← Back</a>
      </div>
      <div className="sidebar-profile">
        <div className="profile-picture"></div>
        <div className="username">Username</div>
      </div>
      <hr />
      <div className="sidebar-menu">
        <a href="#" className="menu-item dashboard" onClick={() => onMenuClick('dashboard')}>Dashboard</a>
        <a href="#" className="menu-item" onClick={() => onMenuClick('jobHistory')}>Job History</a>
        <a href="#" className="menu-item" onClick={() => onMenuClick('jobApplied')}>Job Applied</a>
        <a href="#" className="menu-item" onClick={() => onMenuClick('jobCompleted')}>Job Completed</a>
      </div>
    </div>
  );
}

export default Sidebar;

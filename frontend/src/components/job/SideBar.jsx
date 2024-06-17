import React from 'react';
import '../../assets/css/SideBar.css';

const Sidebar = () => {
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
        <a href="#" className="menu-item dashboard">Dashboard</a>
        <a href="#" className="menu-item">Job History</a>
        <a href="#" className="menu-item">Job Applied</a>
        <a href="#" className="menu-item">Job Completed</a>
      </div>
    </div>
  );
}

export default Sidebar;

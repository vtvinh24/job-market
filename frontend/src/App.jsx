//// Page imports
// Home
import HomePage from "./pages/home/HomePage";
import HomeGuest from "./pages/home/HomeGuest";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";

// Forum
import Forum from "./pages/forum/Forum";
import PostDetail from "./pages/forum/PostDetail";
import EditPost from "./pages/forum/EditPost";
import AddPost from "./pages/forum/AddPost";

// Jobs
import Market from "./pages/jobs/Market";
import Jobs from "./pages/home/Jobs";
import AddJob from "./pages/jobs/EnlistJob";
import MyJobs from "./pages/jobs/MyJobs";

// Technical
import PageNotFound from "./pages/technical/PageNotFound";
import Dashboard from "./pages/home/Dashboard";

// Profile
import Profile from "./pages/profile/Profile";
import Security from "./pages/profile/Security";

// Users
import Setting from "./pages/home/Setting";
import Users from "./pages/home/Users";

// Components
import HomeFooter from "./components/HomeFooter";
import HomeNavbar from "./components/HomeNavbar";

// Misc
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import React from "react";

import ErrorPage from "./pages/error/ErrorPage";
import CreateTicketPage from "./pages/user/CreateTicket";

function App() {
  return (
    <BrowserRouter>
      <HomeNavbar />
      <div className="content" style={{ minHeight: "60vh" }}>
        <Routes>
          {/* HOME ROUTES */}
          <Route exact path="/" element={<HomeGuest />} />
          <Route exact path="/home" element={<HomePage />} />

          {/* AUTH ROUTES */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />

          {/* FORUM ROUTES */}
          <Route exact path="/forum" element={<Forum />} />
          <Route exact path="/posts/:id" element={<PostDetail />} />
          <Route exact path="/forum/add" element={<AddPost />} />
          <Route exact path="/forum/edit/:id" element={<EditPost />} />

          {/* JOBS ROUTES */}
          <Route exact path="/market" element={<Market />} />
          <Route exact path="/jobs" element={<Jobs />} />
          <Route exact path="/jobs/add" element={<AddJob />} />
          <Route exact path="/myjobs" element={<MyJobs />} />

          {/* PROFILE */}
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/security" element={<Security />} />

          {/* USERS ROUTES */}
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/settings" element={<Setting />} />
          <Route exact path="/ticket" element={<CreateTicketPage />} />

          {/* TECHNICAL ROUTES */}
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/error" element={<ErrorPage />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

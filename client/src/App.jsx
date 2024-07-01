//// Page imports
// Home
import HomePage from "./pages/home/HomePage";
import HomeGuest from "./pages/home/HomeGuest";

// Auth
import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";
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
import EnlistJob from "./pages/jobs/EnlistJob";
import JobDetail from "./pages/jobs/JobDetail";
import MyJobs from "./pages/jobs/MyJobs";
import EditJob from "./pages/jobs/EditJob";
import JobHistory from "./pages/jobs/JobHistory";

// Technical
import PageNotFound from "./pages/technical/PageNotFound";
import Dashboard from "./pages/home/Dashboard";
import TestPage from "./pages/technical/TestPage";

// Users
// import Setting from "./pages/home/Setting";
// import Users from "./pages/home/Users";
import Security from "./pages/profile/Security";
import Profile from "./pages/profile/Profile";

// Components
import HomeFooter from "./components/HomeFooter";
// import HomeNavbar from "./components/HomeNavbar";
import AppNavbar from "./components/Navbar";

// Misc
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";

// import ErrorPage from "./pages/error/ErrorPage";
import CreateTicketPage from "./pages/user/CreateTicket";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    
      <AuthProvider className="page">
        <BrowserRouter>
          <AppNavbar className="mb-auto"/>
          <div className="min-vh-100 mt-5">
            <Routes>
              {/* AUTH ROUTES */}
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/logout" element={<Logout />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/reset-password" element={<ResetPassword />} />

              {/* HOME ROUTES */}
              <Route exact path="/" element={<HomeGuest />} />
              <Route exact path="/home" element={<HomePage />} />

              {/* FORUM ROUTES */}
              <Route exact path="/forum" element={<Forum />} />
              <Route exact path="/posts/:id" element={<PostDetail />} />
              <Route exact path="/forum/add" element={<AddPost />} />
              <Route exact path="/forum/edit/:id" element={<EditPost />} />

              {/* JOBS ROUTES */}
              <Route exact path="/market" element={<Market />} />
              <Route exact path="/jobs" element={<Jobs />} />
              <Route exact path="/jobs/:id" element={<JobDetail />} />
              <Route exact path="/jobs/add" element={<EnlistJob />} />
              <Route exact path="/myjobs" element={<MyJobs />} />
              <Route exact path="/jobs/edit/:id" element={<EditJob />} />
              <Route exact path="/myjobs/history" element={<JobHistory />} />

              {/* USERS ROUTES */}
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/security" element={<Security />} />
              {/* <Route exact path="/users" element={<Users />} /> */}
              {/* <Route exact path="/settings" element={<Setting />} /> */}
              <Route exact path="/ticket" element={<CreateTicketPage />} />

              {/* TECHNICAL ROUTES */}
              <Route exact path="*" element={<PageNotFound />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/test" element={<TestPage />} />
            </Routes>
          </div>
          <HomeFooter />
        </BrowserRouter>
      </AuthProvider>
    
  );
}
export default App;

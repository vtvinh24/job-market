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

// Technical
import PageNotFound from "./pages/technical/PageNotFound";
import AdminDashboard from "./pages/technical/AdminDashboard";


// Users
import Setting from "./pages/home/Setting";
import Users from "./pages/home/Users";

// Components
import HomeFooter from "./components/HomeFooter";
import HomeNavbar from "./components/HomeNavbar";

// Misc
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <HomeNavbar />
      <div className="content">
        <Routes>
          {/* HOME ROUTES */}
          <Route exact path="/" element={<HomeGuest />} />
          <Route exact path="/home" element={<HomePage />} />

          {/* AUTH ROUTES */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />

          {/* FORUM ROUTES */}
          <Route exact path="/forum" element={<Forum />} />
          <Route exact path="/posts/:id" element={<PostDetail />} />
          <Route exact path="/forum/add" element={<AddPost />} />
          <Route exact path="/forum/edit" element={<EditPost />} />

          {/* JOBS ROUTES */}
          <Route exact path="/market" element={<Market />} />
          <Route path="/jobs" element={<Jobs />} />

          {/* TECHNICAL ROUTES */}
          <Route path="*" element={<PageNotFound />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          

          {/* USERS ROUTES */}
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
      </div>
      <HomeFooter />
    </BrowserRouter>
  );
}
export default App;

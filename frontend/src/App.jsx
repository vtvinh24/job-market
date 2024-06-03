import "./App.css";
import HomePage from "./pages/home/HomePage";
import PageNotFound from "./pages/technical/PageNotFound";
import Forum from "./pages/forum/Forum";
import Market from "./pages/jobs/Market";
import HomeGuest from "./pages/home/HomeGuest";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPost from "./pages/forum/AddPost";
import PostDetail from "./pages/forum/PostDetail";
import AddJob from './pages/jobs/Addjob';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
function App() {
  return (
    <BrowserRouter>
      
      <div className="content">
        <Routes>
          <Route exact path="/" element={<HomeGuest />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/forum" element={<Forum />} />
          <Route exact path="/add-post" element={<AddPost />} />
          <Route exact path="/add-job" element={<AddJob />} />
          <Route exact path="/posts/:id" element={<PostDetail />} />
          <Route exact path="/jobs" element={<Market />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
     
    </BrowserRouter>
  );
}
export default App;

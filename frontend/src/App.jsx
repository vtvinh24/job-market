import "./App.css";
import HomePage from "./pages/home/HomePage";
import PageNotFound from "./pages/technical/PageNotFound";
import Forum from "./pages/forum/Forum";
import Market from "./pages/jobs/Market";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeNavbar from "./components/HomeNavbar";
import HomeFooter from "./components/HomeFooter";
import AddPost from "./pages/forum/AddPost";
import PostDetail from "./pages/forum/PostDetail";
import AddJob from "./pages/jobs/AddJob";
function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <HomeNavbar />
      </div>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
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
      <div className="footer">
        <HomeFooter />
      </div>
    </BrowserRouter>
  );
}
export default App;

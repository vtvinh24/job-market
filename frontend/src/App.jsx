import './App.css';
import "react-router-dom";
// import Forum from './pages/Forum.jsx';
import HomePage from './pages/HomePage.jsx';
// import Jobs from './pages/EnlistJobs.jsx';
// import Login from './pages/Login.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
// import Profile from './pages/Profile.jsx';
// import Settings from './pages/Settings.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CookiesProvider, useCookies } from 'react-cookie'

function App() {
    return (
      <>
        <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<HomePage />}
                    />
                    
                    {/* <Route exact path='/forum' element={<Forum />} />
                    <Route exact path='/post' element={<Post />} />
                    <Route exact path='/add-post' element={<AddPost />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/settings' element={<Settings />} />
                    <Route exact path='/profile' element={<Profile />} />
                    <Route exact path='/jobs' element={<Jobs />} /> */}

                    <Route
                        path="*"
                        element={<PageNotFound />}
                    />
                </Routes>
            </BrowserRouter>
      </>
      
    );
  }
export default App;
//   function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

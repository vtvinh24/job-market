import './App.css';
import "react-router-dom";
import Forum from './pages/Forum';
import HomeGuest from './pages/HomeGuest';
import HomePage from './pages/HomePage';
import JobMarket from './pages/JobMarket';
import Jobs from './pages/Jobs';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


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
                    
                    <Route exact path='/forum' element={<Forum />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/settings' element={<Settings />} />
                    <Route exact path='/profile' element={<Profile />} />
                    <Route exact path='/jobs' element={<Jobs />} />

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

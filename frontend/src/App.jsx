import './App.css';
import Forum from './pages/Forum';
import HomeScreen from './pages/HomeGuest';
import JobMarket from './pages/JobMarket';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
    return (
      <>
        <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<HomeScreen />}
                    />
                    
                    <Route exact path='/forum' element={<Forum />} />

                    <Route
                        path="/JobMarket"
                        element={<JobMarket />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
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

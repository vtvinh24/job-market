
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './HomeScreen/HomeGuest.js';

function App() {
  const enabled = false;
  const text= 'A Button';
  const placeholder = 'input value...';
  const size = 50;  

    return (
      <section>
      <Router></Router>
      <HomeScreen />
      </section>
      
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

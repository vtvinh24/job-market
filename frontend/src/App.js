import logo from './logo.svg';
import './App.css';
import Slide1_2 from './slide/Slide1_2';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const enabled = false;
  const text= 'A Button';
  const placeholder = 'input value...';
  const size = 50;  

    return (
      <section>

      <Slide1_2/>
      <button disabled={!enabled}>{text}</button>
      <input placeholder={placeholder} size={size} />
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

import './App.css';
import "react-router-dom";
import AddJob from './pages/Addjob';
import PageNotFound from './pages/PageNotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
      <>
         <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<AddJob />}
                    />
                    {/*
                    <Route exact path='/forum' element={<Forum />} />
                    <Route exact path='/post' element={<Post />} />
                    <Route exact path='/add-post' element={<AddPost />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/settings' element={<Settings />} />
                    <Route exact path='/profile' element={<Profile />} />
                    <Route exact path='/jobs' element={<Jobs />} />
                    */}
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
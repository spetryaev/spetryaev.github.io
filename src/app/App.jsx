//import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Main from '../layouts/Main';
import Featured from '../layouts/Featured';
import About from '../layouts/About';
import Showcase from '../layouts/Showcase';
import Project from '../layouts/Project';

function App() {
  return (
    <div className="app">
        <Routes>
          <Route exact path="/" element={<Main/>}>
            <Route index element={<Featured/>}/>
            <Route exact path="about" element={<About/>}/>
            <Route path="projects/*" element={<Project/>}/>

            <Route path="*" element={<Showcase/>}/>
          </Route>
        </Routes>
     </div>
  );
}

export default App;

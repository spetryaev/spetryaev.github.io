//import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Main from '../layouts/Main';
import Featured from '../layouts/Featured';
import About from '../layouts/About';
import Showcase from '../layouts/Showcase';

function App() {
  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<Main/>}>
            <Route index element={<Featured/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<Showcase/>}/>
          </Route>
        </Routes>
     </div>
  );
}

export default App;

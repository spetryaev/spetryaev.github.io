//import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/Navigation';
import Featured from './routes/Featured';
import About from './routes/About';
import Showcase from './routes/Showcase';


function App() {
  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<Navigation/>}>
            <Route index element={<Featured/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<Showcase/>}/>
          </Route>
        </Routes>
     </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Play from './pages/play';
import How from './pages/how';
import Category from './pages/category';
import Countries from './pages/countries';

function App() {
  
  return (
    <div className='block'>
      <BrowserRouter>

      <Routes>
      <Route path='play' element = { <Play />} />
      <Route path='how' element = { <How />} />
      <Route path='category' element = { <Category />} />
      <Route path='countries' element = { <Countries />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

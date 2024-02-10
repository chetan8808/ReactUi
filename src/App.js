import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/contact' element={<Contact/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

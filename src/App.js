import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Resumedownload from './Pages/Resumedownload';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/resume' element={<Resumedownload></Resumedownload>}></Route>
      </Routes>
    </div >
  );
}

export default App;

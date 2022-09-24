import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import NavBar from './elements/NavBar';



function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='home' element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='resume' element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;

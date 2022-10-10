import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import NavBar from './elements/NavBar';
import ProjectDetails from './pages/ProjectDetails';
import { Navigate } from 'react-router-dom';



function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<Home />}
        />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='home' element={<Navigate to='/' replace />} />
        <Route path='projects' element={<Projects />} />
        <Route path='resume' element={<Resume />} />
        <Route path="projects/:projectDetails" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;

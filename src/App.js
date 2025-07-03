import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Education from './pages/education';
import Contact from './components/contact';
import Projects from './components/projects';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;

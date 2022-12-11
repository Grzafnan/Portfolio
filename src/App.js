import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Banner from './Pages/Banner/Banner';
import Contact from './Pages/Contact/Contact';
import Navbar from './Pages/Navbar/Navbar';
import Projects from './Pages/Projects/Projects';

function App() {
  return (

    <div id='home'>
      <Navbar />
      <div className='max-w-[85rem] mx-auto'>
        <Banner />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

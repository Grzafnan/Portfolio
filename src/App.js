import { BrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Banner from './Pages/Banner/Banner';
import Contact from './Pages/Contact/Contact';
import Navbar from './Pages/Navbar/Navbar';
import Projects from './Pages/Projects/Projects';
import { router } from './Routes/router';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

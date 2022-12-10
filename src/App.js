import './App.css';
import Banner from './Pages/Banner/Banner';
import Contact from './Pages/Contact/Contact';
import Navbar from './Pages/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className='max-w-[85rem] mx-auto'>
        <Banner />
        <Contact />
      </div>
    </div>
  );
}

export default App;

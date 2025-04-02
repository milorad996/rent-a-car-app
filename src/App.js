import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NavbarComponent from './components/NavbarComponent';
import Contact from './pages/Contact';
import FooterComponent from './components/FooterComponent';
import AllCars from './pages/AllCars';
import CarDetails from './components/CarDetails';
import RentalTerms from './pages/RentalTerms';

function App() {
  return (
    <div className="App">
      <NavbarComponent />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/car-details/:id" element={<CarDetails />} />
          <Route path="/cars" element={<AllCars />} />
          <Route path="/rental" element={<RentalTerms />} />
        </Routes>
      </div>

      <FooterComponent />
    </div>
  );
}

export default App;

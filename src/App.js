import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Router and related components
import './App.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu'; // Import the Menu component
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />


          {/* Add more routes for other pages like Reservation, Contact, and Login */}
          {/* Example:
          <Route path="/Reservation" element={<Reservation />} />
          */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

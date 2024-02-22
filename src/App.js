// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/login'; // Adjust the import path as necessary
import Register from './pages/registration'; // Adjust the import path as necessary
import ProfileManagement from './pages/profileManagement'; // Adjust the import path as necessary
import FuelQuote from './pages/fuel'; // Adjust the import path as necessary
import FuelQuoteHistory from './pages/fuelQuoteHistory'; // Adjust the import path as necessary
import "./App.css";
import AboutSection from './components/AboutSection'; // Import the AboutSection component


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} /> {/* Set Login as the default route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile-management" element={<ProfileManagement />} />
        <Route path="/fuel-quote" element={<FuelQuote />} />
        <Route path="/fuel-quote-history" element={<FuelQuoteHistory quotes={[]} />} /> {/* Placeholder for quotes */}
        <Route path="/about-us" element={<AboutSection />} /> {/* Route for AboutSection */}

      </Routes>
    </Router>
  );
}

export default App;

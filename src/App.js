import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ReservationPage from './components/ReservationPage';
import OrderOnlinePage from './components/OrderOnlinePage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<ReservationPage />} />
        <Route path="/order-online" element={<OrderOnlinePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

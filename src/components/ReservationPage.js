import React from 'react';
import BookingForm from './BookingForm';
import './ReservationPage.css';

const ReservationPage = () => {
  return (
    <div className="ReservationPage">
      <h1>Reserve a Table</h1>
      <BookingForm />
    </div>
  );
};

export default ReservationPage;

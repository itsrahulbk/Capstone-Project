import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.guests || formData.guests < 1 || formData.guests > 10) {
      newErrors.guests = 'Number of guests must be between 1 and 10';
    }
    if (!formData.occasion) newErrors.occasion = 'Occasion is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (window.confirm("Are you sure you want to confirm this reservation?")) {
        alert("Your reservation has been confirmed!");
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="booking-container">
      <h1>Book Now</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="date">Choose date</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
        {errors.date && <p className="error">{errors.date}</p>}

        <label htmlFor="time">Choose time</label>
        <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} />
        {errors.time && <p className="error">{errors.time}</p>}

        <label htmlFor="guests">Number of guests</label>
        <input type="number" id="guests" name="guests" value={formData.guests} min="1" max="10" onChange={handleChange} />
        {errors.guests && <p className="error">{errors.guests}</p>}

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {errors.occasion && <p className="error">{errors.occasion}</p>}

        <button type="submit" className="submit-button">Make Your Reservation</button>
      </form>
    </div>
  );
};

export default BookingForm;

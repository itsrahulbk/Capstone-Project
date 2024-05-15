import React, { useState } from 'react';
import Modal from './Modal';
import './WeeklySpecials.css';

const WeeklySpecials = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showConfirmedModal, setShowConfirmedModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [gifSrc, setGifSrc] = useState('');

  const handleOrderNow = () => {
    setModalMessage("Are you sure you want to confirm this order?");
    setGifSrc('');
    setShowConfirmModal(true);
  };

  const handleConfirm = () => {
    setShowConfirmModal(false);
    setModalMessage("Your order has been confirmed!");
    setGifSrc("/images/confirmed.gif");
    setShowConfirmedModal(true);
  };

  const closeModal = () => {
    setShowConfirmModal(false);
    setShowConfirmedModal(false);
  };

  return (
    <>
      <section className="weekly-specials">
        <h2>This Week's Specials!</h2>
        <div className="specials-grid">
          <div className="special-item">
            <img src="/images/greek-salad.jpg" alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <button onClick={handleOrderNow}>Order Now</button>
          </div>
          <div className="special-item">
            <img src="/images/bruschetta.jpg" alt="Bruschetta" />
            <h3>Bruschetta</h3>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <button onClick={handleOrderNow}>Order Now</button>
          </div>
          <div className="special-item">
            <img src="/images/lemon-dessert.jpg" alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <p>This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <button onClick={handleOrderNow}>Order Now</button>
          </div>
        </div>
      </section>
      <Modal 
        show={showConfirmModal} 
        onClose={closeModal} 
        message={modalMessage} 
        onConfirm={handleConfirm} 
      />
      <Modal 
        show={showConfirmedModal} 
        onClose={closeModal} 
        message="Your order has been confirmed!" 
        gifSrc={gifSrc} 
      />
    </>
  );
};

export default WeeklySpecials;

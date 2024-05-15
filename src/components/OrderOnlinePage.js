import React from 'react';
import WeeklySpecials from './WeeklySpecials';
import './OrderOnlinePage.css';

const OrderOnlinePage = () => {
  const handleOrderNow = () => {
    if (window.confirm("Do you want to confirm order? You won't be able to revert this!")) {
      alert("Your order has been confirmed!");
    }
  };

  return (
    <main className="OrderOnlinePage">
      <h2>Order Online</h2>
      <WeeklySpecials onOrderNow={handleOrderNow} />
    </main>
  );
};

export default OrderOnlinePage;

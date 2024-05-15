import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, message, gifSrc, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        {gifSrc && <img src={gifSrc} alt="Confirmation GIF" className="confirmation-gif" />}
        <p>{message}</p>
        {onConfirm && (
          <div className="modal-actions">
            <button className="confirm-button" onClick={onConfirm}>Yes</button>
            <button className="cancel-button" onClick={onClose}>No</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

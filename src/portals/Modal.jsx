import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ children, closeModal }) => {
  const html = (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      height: '200px',
      width: '200px',
      background: 'gray'
    }}>
      <button
        onClick={() => {
          closeModal();
        }}
      >
        Close modal
      </button>
      {children}
    </div>
  );

  return ReactDOM.createPortal(html, modalRoot);
};

export default Modal;

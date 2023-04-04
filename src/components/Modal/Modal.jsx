import { React, useEffect } from 'react';
import style from './Modal.module.css';
import propTypes from 'prop-types';

export const Modal = ({ picture, closeLargeImage }) => {
  useEffect(() => {
    const handleClose = e => {
      if (e.code === 'Escape') {
        return closeLargeImage();
      }
    };
    window.addEventListener('keydown', handleClose);
    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, [closeLargeImage]);

  return (
    <div className={style.overlay} onClick={closeLargeImage}>
      <div className={style.modal}>
        <img src={picture} alt="Something" />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  picture: propTypes.string,
  closeLargeImage: propTypes.func,
};

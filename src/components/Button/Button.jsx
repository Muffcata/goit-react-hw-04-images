import { React } from 'react';
import style from './Button.module.css';
import propTypes from 'prop-types';

export const Button = props => {
  return (
    <button className={style.button} onClick={props.onClick}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: propTypes.func,
};

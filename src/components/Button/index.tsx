import React from 'react';
import * as styles from './styles.module.scss';

type Props = {
  text: string;
  onClick?: () => void;
  color: 'white' | 'coquelicot' | 'onyx';
};

const Button = ({ onClick, text, color }: Props) => {
  return (
    <button
      className={`${styles.button} ${styles[color]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

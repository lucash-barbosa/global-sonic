import React from 'react';
import Button from '../../../components/Button';
import * as styles from './styles.module.scss';

import vale from '../../../assets/icons/vale.svg';

const Vale = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={vale} alt="Logo da Coca Cola" />
        <h2 className={styles.title}>Indústria</h2>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        </p>
        <Button text='Ver produtos' color='white' />
      </div>
    </section>
  );
};

export default Vale;
import React from 'react';
import Button from '../../../components/Button';
import * as styles from './styles.module.scss';

import ufif from '../../../assets/icons/ufif.svg';

const Ufif = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={ufif} alt="Logo da Coca Cola" />
        <h2 className={styles.title}>Espaços Culturais</h2>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        </p>
        <Button text='Ver produtos' color='white' />
      </div>
    </section>
  );
};

export default Ufif;
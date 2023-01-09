import React from 'react';
import * as styles from './styles.module.scss';

const Main = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Nossos projetos</h1>
        <h2 className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </h2>
      </div>
      <div className={styles.info}>
        <div className={`${styles.Item} ${styles.borderRight}`}>
          <h3 className={styles.Item__title}>Indústria </h3>
          <p className={styles.Item__text}>Vale   |   Coca-Cola   |   Heineken</p>
        </div>
        <div className={`${styles.Item} ${styles.borderRight}`}>
          <h3 className={styles.Item__title}>Hospitalidade </h3>
          <p className={styles.Item__text}>Rede Reriditional</p>
        </div>
        <div className={styles.Item}>
          <h3 className={styles.Item__title}>Espaços </h3>
          <p className={styles.Item__text}>Banco do Brasil   |   Teatro UFFJ</p>
        </div>
      </div>
    </section>
  );
};

export default Main;
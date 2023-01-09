import React from 'react';
import * as styles from './styles.module.scss';

const KnowMore = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapperProduct}>
        <h2 className={styles.title}>Chamada para conhecer produto</h2>
        <h3 className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </h3>
      </div>
      <div className={styles.wrapperAbout}>
        <h2 className={styles.title}>Chamada para conhecer sobre</h2>
        <p className={styles.text}> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        </p>
        <div className={styles.wrapperButtons}>
          <button className={styles.buttonDoubt}>Dúvidas</button>
          <button className={styles.buttonContact}>Contato</button>
        </div>
      </div>
    </section>
  );
};

export default KnowMore;

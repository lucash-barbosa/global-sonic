import React from 'react';
import * as styles from './styles.module.scss';
import Button from '../../../components/Button';

import GlobalSonic from '../../../assets/images/global_sonic.png';

const Products = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>A Global Sonic</h2>
      <h3 className={styles.subtitle}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </h3>
      <div className={styles.wrapperImg}>
        <img className={styles.img} src={GlobalSonic} alt='Pessoas conversando na empresa' />
        <p className={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        </p>
      </div>
      <h2 className={styles.title}>Chamada para conhecer sobre</h2>
      <Button
        onClick={() => console.log('Click')}
        text='Conheça a Global Sonic'
        color='onyx'
      />
    </section>
  );
};

export default Products;

import React from 'react';
import * as styles from './styles.module.scss';
import Button from '../../../components/Button';

const Main = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Qualidade de ponta a ponta</h1>
        <h2 className={styles.subtitle}>
          Desenvolvemos e utilizamos um sistema próprio, garantindo
        </h2>
        <Button
          onClick={() => console.log('Click')}
          text='Conhecer Produtos'
          color='coquelicot'
        />
      </div>
    </section>
  );
};

export default Main;

import React from 'react';
import Button from '../../../components/Button';
import * as styles from './styles.module.scss';

import CocaIcon from '../../../assets/icons/cocacola.svg';

const Projects = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Nossos projetos</h2>
        <p className={styles.subtitle}>
          Vale   |   <strong>Coca-Cola</strong>   |   Rede Meridional
        </p>
        <img className={styles.img} src={CocaIcon} alt="Logo da Coca Cola" />
        <h2 className={styles.title}>Coca-Cola</h2>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        </p>
        <Button text='Conheça todas as cases' color='white' />
      </div>
    </section>
  );
};

export default Projects;
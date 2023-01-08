import React from 'react';
import * as styles from './styles.module.scss';

import Logo from '../../assets/icons/logo.svg';


const Header = () => {
  return (
    <header className={styles.hearder}>
      <img className={styles.img} src={Logo} alt='Logo da Global Sonic' />
      <nav>
        <ul className={styles.ul}>
          <li>Produtos</li>
          <li>Nosso Projetos</li>
          <li>A Global Sonic</li>
          <li>Dúvidas</li>
          <li>Contato</li>
        </ul>  
      </nav>
    </header>
  );
};

export default Header;
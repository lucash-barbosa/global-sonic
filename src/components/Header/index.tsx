import React from 'react';
import {Link} from 'gatsby';
import * as styles from './styles.module.scss';

import Logo from '../../assets/icons/logo.svg';


const Header = () => {
  return (
    <header className={styles.hearder}>
      <Link to='/'>
        <img className={styles.img} src={Logo} alt='Logo da Global Sonic' />
      </Link>
      <nav>
        <ul className={styles.ul}>
          <li>Produtos</li>
          <li><Link to='/Projects'>Nosso Projetos</Link></li>
          <li>A Global Sonic</li>
          <li>Dúvidas</li>
          <li>Contato</li>
        </ul>  
      </nav>
    </header>
  );
};

export default Header;
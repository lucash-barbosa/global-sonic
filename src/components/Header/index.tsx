import React from 'react';
import Logo from '../../assets/icons/logo.svg';
import { StyledHeader, StyledUl } from './styles';
import 'normalize.css';


const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt='Logo da Global Sonic' />
      <nav>
        <StyledUl>
          <li>Produtos</li>
          <li>Nosso Projetos</li>
          <li>A Global Sonic</li>
          <li>Dúvidas</li>
          <li>Contato</li>
        </StyledUl>  
      </nav>
    </StyledHeader>
  );
};

export default Header;
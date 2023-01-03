import React from 'react';
import Logo from '../../assets/icons/logo.svg';
import { StyledHeader, StyledUl } from './styles';
import 'normalize.css';


const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} />
      <StyledUl>
        <li>Produtos</li>
        <li>Nosso Projetos</li>
        <li>A Global Sonic</li>
        <li>Dúvidas</li>
        <li>Contato</li>
      </StyledUl>  
    </StyledHeader>
  );
};

export default Header;
import React from 'react';
import { StyledUl, StyledDiv, StyledTitle } from './styles';

export const Shortcuts = () => {
  return (
    <StyledDiv>
      <div>
        <StyledTitle>Produtos</StyledTitle>
        <StyledUl>
          <li>Central de alarme</li>
          <li>Roteadores e Sinalizadores</li>
          <li>Acionadores Manuais</li>
          <li>Detectores de Incêndio</li>
          <li>Roteadores de Sinal</li>
          <li>Roteador com Acionador Automático</li>
          <li>Monitores de Alerta</li>
        </StyledUl>
      </div>
      <div>
        <StyledTitle>Nossos projetos</StyledTitle>
        <StyledUl>
          <li>Projeto 1</li>
          <li>Projeto 2</li>
          <li>Projeto 3</li>
          <li>Projeto 4</li>
        </StyledUl>
      </div>
      <div>
        <StyledTitle>A Global Sonic</StyledTitle>
      </div>
      <div>
        <StyledTitle>Dúvidas</StyledTitle>
      </div>
      <div>
        <StyledTitle>Contato</StyledTitle>
      </div>
    </StyledDiv>
  );
};
export default Shortcuts;
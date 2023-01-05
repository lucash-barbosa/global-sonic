import React from 'react';
import ButtonCoquelicot from '../../../components/ButtonCoquelicot';
import { StyledSection, StyledSubtitle, StyledTitle, Wrapper } from './styles';

const Main = () => {
  return (
    <StyledSection>
      <Wrapper>
        <StyledTitle>Qualidade de ponta a ponta</StyledTitle>
        <StyledSubtitle>
          Desenvolvemos e utilizamos um sistema próprio, garantindo
        </StyledSubtitle>
        <ButtonCoquelicot
          onClick={() => console.log('Click')}
          text='Conhecer Produtos'
        />
      </Wrapper>
    </StyledSection>
  );
};

export default Main;

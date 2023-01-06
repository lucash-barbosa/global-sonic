import React from 'react';
import ButtonOnyx from '../../../components/ButtonOnyx';
import {
  StyledSection,
  StyledTitle,
  StyledSubtitle,
  WrapperImg,
  StyledImg,
  StyledText,
} from './styles';

import GlobalSonic from '../../../assets/images/global_sonic.png';

const Products = () => {
  return (
    <StyledSection>
      <StyledTitle>A Global Sonic</StyledTitle>
      <StyledSubtitle>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </StyledSubtitle>
      <WrapperImg>
        <StyledImg src={GlobalSonic} alt='Pessoas conversando na empresa' />
        <StyledText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        </StyledText>
      </WrapperImg>
      <StyledTitle>Chamada para conhecer sobre</StyledTitle>
      <ButtonOnyx
        onClick={() => console.log('Click')}
        text='Conheça a Global Sonic'
      />
    </StyledSection>
  );
};

export default Products;

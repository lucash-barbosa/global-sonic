import React from 'react';
import {
  KnowMoreButtonContact,
  KnowMoreButtonDoubt,
  StyledSection,
  StyledSubtitle,
  StyledText,
  StyledTitle,
  WrapperAbout,
  WrapperButtons,
  WrapperProduct,
} from './styles';

const KnowMore = () => {
  return (
    <StyledSection>
      <WrapperProduct>
        <StyledTitle>Chamada para conhecer produto</StyledTitle>
        <StyledSubtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </StyledSubtitle>
      </WrapperProduct>
      <WrapperAbout>
        <StyledTitle>Chamada para conhecer sobre</StyledTitle>
        <StyledText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        </StyledText>
        <WrapperButtons>
          <KnowMoreButtonDoubt>Dúvidas</KnowMoreButtonDoubt>
          <KnowMoreButtonContact>Contato</KnowMoreButtonContact>
        </WrapperButtons>
      </WrapperAbout>
    </StyledSection>
  );
};

export default KnowMore;

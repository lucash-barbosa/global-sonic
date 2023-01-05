import React from 'react';
import ButtonOnyx from '../../../components/ButtonOnyx';
import {
  StyledSection,
  Wrapper,
  StyledTitle,
  StyledSubtitle,
  WrapperProducts,
  WideProduct,
  WideProductTitle,
  WideProductSubtitle,
  ProductButton,
  SmallProduct,
  SmallProductTitle,
  SmallProductSubtitle,
} from './styles';

import Wide1 from '../../../assets/images/wide_product-1.png';
import Wide2 from '../../../assets/images/wide_product-2.png';
import Small1 from '../../../assets/images/small-1.png';
import Small2 from '../../../assets/images/small-2.png';
import Small3 from '../../../assets/images/small-3.png';
import Small4 from '../../../assets/images/small-4.png';

const Products = () => {
  return (
    <StyledSection>
      <Wrapper>
        <StyledTitle>Nossos protudos</StyledTitle>
        <StyledSubtitle>
          Desenvolvemos e utilizamos um sistema próprio, garantindo
        </StyledSubtitle>
      </Wrapper>

      <WrapperProducts>

        <WideProduct background={Wide1}>
          <WideProductTitle color='white'>Acionadores Manuais</WideProductTitle>
          <WideProductSubtitle color='white'>Linha especial</WideProductSubtitle>
          <ProductButton color='white'>Conheça</ProductButton>
        </WideProduct>

        <SmallProduct background={Small1}>
          <SmallProductTitle color='onyx'>Roteadores e sinalizadores</SmallProductTitle>
          <SmallProductSubtitle color='onyx'>Linha especial</SmallProductSubtitle>
          <ProductButton color='onyx'>Conheça</ProductButton>
        </SmallProduct>

        <SmallProduct background={Small2}>
          <SmallProductTitle color='white'>Detectores de incêndio</SmallProductTitle>
          <SmallProductSubtitle color='white'>Linha especial</SmallProductSubtitle>
        </SmallProduct>

        <SmallProduct background={Small3}>
          <SmallProductTitle color='onyx'>Detectores</SmallProductTitle>
          <SmallProductSubtitle color='onyx'>Linha especial</SmallProductSubtitle>
        </SmallProduct>

        <SmallProduct background={Small4}>
          <SmallProductTitle color='onyx'>Detectores</SmallProductTitle>
          <SmallProductSubtitle color='onyx'>Linha especial</SmallProductSubtitle>
        </SmallProduct>

        <WideProduct background={Wide2}>
          <WideProductTitle color='white'>Central de alarme</WideProductTitle>
          <WideProductSubtitle color='white'>Linha especial</WideProductSubtitle>
        </WideProduct>

      </WrapperProducts>

      <Wrapper>
        <StyledTitle>Chamada para conhecer todos </StyledTitle>
        <ButtonOnyx
          onClick={() => console.log('Click')}
          text='Conheça todas a linhas'
        />
      </Wrapper>
    </StyledSection>
  );
};

export default Products;

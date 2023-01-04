import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';

import Banner from '../assets/images/home_banner.png';
import Button from '../components/Button';

const StyledDiv = styled.section`
  display: flex;
  align-items: center;
  min-height: 718px;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: auto 0;
`;

const Wrapper = styled.section`
  padding: 0 10vw;
  max-width: 800px;
`;

const StyledTitle = styled.h1`
  margin: 0;
  font-weight: 500;
  font-size: 40px;
  line-height: 89.7%;
  color: ${({theme}) => theme.colors.white};
`;

const StyledSubtitle = styled.h2`
  font-weight: 400;
  font-size: 26px;
  line-height: 32px;
  color: ${({theme}) => theme.colors.white};
  margin: 20px 0;
`;

const Home: React.FC<PageProps> = () => {
  return (<Layout>
    <StyledDiv>
      <Wrapper>
        <StyledTitle>Qualidade de ponta a ponta</StyledTitle>
        <StyledSubtitle>Desenvolvemos e utilizamos um sistema próprio, garantindo</StyledSubtitle>
        <Button onClick={() => console.log('Click')} text='Conhecer Produtos' />
      </Wrapper>
    </StyledDiv>
  </Layout>);
};

export default Home;

export const Head: HeadFC = () => <title>Início</title>;

import styled from 'styled-components';

import Banner from '../../../assets/images/home_banner.png';

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  min-height: 718px;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  padding: 0 10vw;
  max-width: 800px;
`;

export const StyledTitle = styled.h1`
  margin: 0;
  font-weight: 500;
  font-size: 40px;
  line-height: 89.7%;
  color: ${({theme}) => theme.colors.white};
`;

export const StyledSubtitle = styled.h2`
  font-weight: 400;
  font-size: 26px;
  line-height: 32px;
  color: ${({theme}) => theme.colors.white};
  margin: 20px 0 30px 0;
`;
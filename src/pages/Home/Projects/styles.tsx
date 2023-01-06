import styled from 'styled-components';

import CocaBanner from '../../../assets/images/cocacola_banner.png';
import { StyledButton } from '../../../components/ButtonCoquelicot/styles';

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  min-height: 718px;
  background-image: url(${CocaBanner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  padding: 0 10vw;
  max-width: 800px;
`;

export const StyledTitle = styled.h2`
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 32px;
  line-height: 22px;
  color: ${({theme}) => theme.colors.white};
`;

export const StyledSubtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: ${({theme}) => theme.colors.white};
  margin: 20px 0 30px 0;

  strong {
    color: ${({theme}) => theme.colors.white};
  }
`;

export const ProjectsButton = styled(StyledButton)`
  background-color: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.onyx};
`;

export const StyledImg = styled.img`
  margin: 20px 0 60px 0;
`;
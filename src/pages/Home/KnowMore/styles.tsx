import styled from 'styled-components';
import { StyledButton } from '../../../components/ButtonCoquelicot/styles';

import MoreAbout from '../../../assets/images/more_about.png';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 600px;
  padding: 70px 0;
  background-image: url(${MoreAbout});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const WrapperProduct = styled.div`
  text-align: center;
  max-width: 900px;
`;

export const WrapperAbout = styled(WrapperProduct)`
  max-width: 90vw;
`;

export const WrapperButtons = styled.div`
  display: flex;
  column-gap: 10vw;
  justify-content: center;
`;

export const StyledTitle = styled.h2`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 32px;
  line-height: 22px;
  color: ${({theme}) => theme.colors.white};
  margin-bottom: 10px;
`;

export const StyledSubtitle = styled.h3`
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  color: ${({theme}) => theme.colors.white};
`;

export const StyledText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: ${({theme}) => theme.colors.white};
  margin: 30px 0 40px 0;
`;

export const KnowMoreButtonContact = styled(StyledButton)`
  width: 50vw;
  max-width: 245px;
`;

export const KnowMoreButtonDoubt = styled(KnowMoreButtonContact)`
  background-color: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.onyx};
`;



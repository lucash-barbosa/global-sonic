import styled, { DefaultTheme } from 'styled-components';
import { StyledButton } from '../../../components/ButtonCoquelicot/styles';

type Props = {
  background: string;
}

type ColorProps = {
  theme: string & DefaultTheme;
  color: 'white' | 'onyx';
}

export const StyledSection = styled.section`
  margin: 0 auto;
  text-align: center;
`;

export const StyledTitle = styled.h2`
  font-weight: 500;
  font-size: 32px;
  line-height: 30px;
  color: ${({theme}) => theme.colors.onyx};
  margin: 25px 0;
`;

export const StyledSubtitle = styled.h3`
  font-weight: 500;
  font-size: 26px;
  line-height: 22px;
  color: ${({theme}) => theme.colors.onyx};
`;

export const Wrapper = styled.div`
  margin: 60px 0;
`;

export const WrapperProducts = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  margin: 20px 5vw;
  text-align: left;
  justify-content: center;
`;

//wide products

export const WideProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 570px;
  padding: 0 20% 25px 3%;
  height: 232px;
  border-radius: 5px;
  background: url(${({background}: Props) => background});
`;

export const WideProductTitle = styled.h3`
  min-width: max-content;
  font-weight: 500;
  font-size: 22px;
  line-height: 22px;
  color: ${(props: ColorProps) => props.color === 'white'? props.theme.colors.white : props.theme.colors.onyx };
`;

export const WideProductSubtitle = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin: 5px 0 10px 0; 
  color: ${(props: ColorProps) => props.color === 'white'? props.theme.colors.white : props.theme.colors.onyx };
`;

//small products

export const SmallProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 270px;
  height: 232px;
  padding: 0 5% 25px 2%;
  border-radius: 5px;
  background: url(${({background}: Props) => background});
`;

export const SmallProductTitle = styled.h3`
  min-width: max-content;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${(props: ColorProps) => props.color === 'white'? props.theme.colors.white : props.theme.colors.onyx };
`;

export const SmallProductSubtitle = styled.h4`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 10px; 
  color: ${(props: ColorProps) => props.color === 'white'? props.theme.colors.white : props.theme.colors.onyx };
`;

//button

export const ProductButton = styled(StyledButton)`
  background-color: ${(props: ColorProps) => props.color === 'white'? props.theme.colors.white : props.theme.colors.onyx };
  color: ${(props: ColorProps) => props.color === 'white'? props.theme.colors.onyx : props.theme.colors.white };
  max-width: 128px;
`;
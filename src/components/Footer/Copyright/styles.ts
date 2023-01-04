import styled from 'styled-components';

export const StyledDiv = styled.div`
  text-align: center;
  padding: 10px 0;
  background-color: ${({theme}) => theme.colors.gunmetal};
`;

export const StyledText = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: ${({theme}) => theme.colors.white};
  strong {
    color: ${({theme}) => theme.colors.white};
  }
`;
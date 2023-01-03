import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  background-color: ${({theme}) => theme.colors.onyx};
  align-items: center;
  justify-content: space-around;
  padding: 13px 0;
  
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

export const StyledUl = styled.header`
  display: flex;

  @media (max-width: 768px) {
    display: block;
  }

  li {
    color: ${({theme}) => theme.colors.white};
    font-size: 16px;
    line-height: 89.7%;
    margin: 0 1vw; 

    @media (max-width: 768px) {
      margin: 2vh 0;
  }
  }
`;

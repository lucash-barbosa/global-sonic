import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr .7fr 1fr;
  padding: 3% 30% 1% 7%;
  grid-column-gap: 20px;
  background-color: ${({theme}) => theme.colors.onyx};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 3% 7% 0 7%;
    text-align: center;
  }
`;

export const StyledTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 89.7%;
  color: ${({theme}) => theme.colors.white};
  padding: 2% 0;
  width: max-content;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const StyledUl = styled.ul`
  width: max-content;

  @media (max-width: 768px) {
    margin: 0 auto;
  }

  li {
    font-size: 14px;
    line-height: 203.2%;
    color: ${({theme}) => theme.colors.white};
  }
`;
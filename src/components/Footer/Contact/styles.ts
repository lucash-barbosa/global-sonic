import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 30px 7% 10px 7%;
  grid-column-gap: 2%;
  background-color: ${({theme}) => theme.colors.outerScape};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0 auto;
    text-align: center;
  }
`;

export const WrapperIcons = styled.div`
  display: flex;
  margin-top: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  a {
    margin: 0 10px;
  }
`;

export const StyledImg = styled.img`
  margin-top: 10px;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const StyledTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 89.7%;
  color: ${({theme}) => theme.colors.white};
  margin-bottom: 4%; 

  @media (max-width: 768px) {
    margin: 20px 0 ;
  }
`;

export const StyledSubtitle = styled.h4`
  font-size: 12px;
  line-height: 15px;
  color: ${({theme}) => theme.colors.white};
  margin: 10% 0 0 20px;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;


export const StyledUl = styled.ul`
  max-width: 190px;

  @media (max-width: 768px) {
    margin: 0 auto;
  }

  li, p {
    font-size: 12px;
    line-height: 15px;
    color: ${({theme}) => theme.colors.white};
    margin: 5% 0;
  }
`;

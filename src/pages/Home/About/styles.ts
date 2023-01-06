import styled from 'styled-components';

export const StyledSection = styled.section`
  margin: 0 auto;
  text-align: center;
  margin: 60px 0;
`;

export const StyledTitle = styled.h2`
  font-weight: 500;
  font-size: 32px;
  line-height: 30px;
  color: ${({theme}) => theme.colors.onyx};
  margin: 25px 0;
`;

export const StyledSubtitle = styled.h3`
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  color: ${({theme}) => theme.colors.onyx};
`;

export const WrapperImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 70px auto;
  text-align: left;
  max-width: 1159px;
`;

export const StyledImg = styled.img`
  z-index: 0;
  max-width: 100vw;
`;

export const StyledText = styled.p`
  z-index: 1;
  position: absolute;
  top: 20%;
  left: 5%;
  background-color: ${({theme}) => theme.colors.white};
  max-width: 320px;
  padding: 50px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: ${({theme}) => theme.colors.onyx};

  @media (max-width: 1024px) {
    width: fit-content;
    top: 5%;
    height: 90%;
  }

  @media (max-width: 768px) {
    top: 1%;
    left: auto;
    height: 98%;
    padding: .5em;
  }
`;
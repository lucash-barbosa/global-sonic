import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Montserrat;
    src: url(../fonts/Montserrat-Variant_wght.ttf);
  }

  * {
    text-decoration: none;
    list-style: none;
    color: #000;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 400;
  }

  li {
    color: ${({theme}) => theme.colors.black};
  }
`;

export default GlobalStyle;
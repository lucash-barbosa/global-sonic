import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../global/GlobalStyles';
import theme from '../../global/styles/theme';
import Header from '../Header';

type Props = {
  children: React.ReactNode;

}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyle />
      <Header />
      <main>{ children }</main>
    </ThemeProvider>
  );

};

export default Layout;
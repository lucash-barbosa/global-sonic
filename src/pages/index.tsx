import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Main from './Home/Main';
import Products from './Home/Products';

const Home: React.FC<PageProps> = () => {
  return (<Layout>
    <Main />
    <Products />
  </Layout>);
};

export default Home;

export const Head: HeadFC = () => <title>Início</title>;

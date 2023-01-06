import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Main from './Home/Main';
import Products from './Home/Products';
import Projects from './Home/Projects';
import About from './Home/About';
import KnowMore from './Home/KnowMore';

const Home: React.FC<PageProps> = () => {
  return (<Layout>
    <Main />
    <Products />
    <Projects />
    <About />
    <KnowMore />
  </Layout>);
};

export default Home;

export const Head: HeadFC = () => <title>Início</title>;

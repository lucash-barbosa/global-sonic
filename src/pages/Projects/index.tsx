import React from 'react';
import Main from './Main';
import CocaCola from './CocaCola';
import Vale from './Vale';
import RedeMeridional from './RedeMeridional';
import BancoBrasil from './BancoBrasil';
import Ufif from './Ufif';
import KnowMore from './KnowMore';
import Layout from '../../components/Layout';

const Products = () => {
  return (<Layout>
    <Main />
    <Vale />
    <CocaCola />
    <RedeMeridional />
    <BancoBrasil />
    <Ufif />
    <KnowMore />
  </Layout>);
};

export default Products;
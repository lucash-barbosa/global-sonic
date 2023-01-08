import React from 'react';
import Button from '../../../components/Button';

import * as styles from './styles.module.scss';
import { SmallProduct, WideProduct } from './styled';

import Wide1 from '../../../assets/images/products/wide-1.png';
import Wide2 from '../../../assets/images/products/wide-2.png';
import Small1 from '../../../assets/images/products/small-1.png';
import Small2 from '../../../assets/images/products/small-2.png';
import Small3 from '../../../assets/images/products/small-3.png';
import Small4 from '../../../assets/images/products/small-4.png';

const Products = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Nossos protudos</h2>
        <h3 className={styles.subtitle}>
          Desenvolvemos e utilizamos um sistema próprio, garantindo
        </h3>
      </div>

      <div className={styles.wrapperProducts}>

        <WideProduct background={Wide1}>
          <h3 className={styles.productTitle__wide}>Acionadores Manuais</h3>
          <h4 className={styles.productSubtitle__wide}>Linha especial</h4>
          <div className={styles.wrapperButton}>
            <Button text='Conheça' color='white' />
          </div>
        </WideProduct>

        <SmallProduct background={Small1}>
          <h3 className={`${styles.productTitle} ${styles.productTitle__small} ${styles.textOnyx}`}>Roteadores e sinalizadores</h3>
          <h4 className={`${styles.productSubtitle__small} ${styles.textOnyx}`}>Linha especial</h4>
          <div className={styles.wrapperButton}>
            <Button text='Conheça' color='onyx' />
          </div>
        </SmallProduct>

        <SmallProduct background={Small2}>
          <h3 className={styles.productTitle__small}>Detectores de incêndio</h3>
          <h4 className={styles.productSubtitle__small}>Linha especial</h4>
        </SmallProduct>

        <SmallProduct background={Small3}>
          <h3 className={`${styles.productTitle__small} ${styles.textOnyx}`}>Detectores</h3>
          <h4 className={`${styles.productSubtitle__small} ${styles.textOnyx}`}>Linha especial</h4>
        </SmallProduct>

        <SmallProduct background={Small4}>
          <h3 className={`${styles.productTitle__small} ${styles.textOnyx}`}>Detectores</h3>
          <h4 className={`${styles.productSubtitle__small} ${styles.textOnyx}`}>Linha especial</h4>
        </SmallProduct>

        <WideProduct background={Wide2}>
          <h3 className={styles.productTitle__wide}>Central de alarme</h3>
          <h4 className={styles.productSubtitle__wide}>Linha especial</h4>
        </WideProduct>

      </div>

      <div className={styles.wrapper}>
        <h2 className={styles.title}>Chamada para conhecer todos </h2>
        <Button
          onClick={() => console.log('Click')}
          text='Conheça todas a linhas'
          color='onyx'
        />
      </div>
    </section>
  );
};

export default Products;

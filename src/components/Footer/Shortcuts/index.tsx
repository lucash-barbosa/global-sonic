import React from 'react';
import * as styles from './styles.module.scss';

export const Shortcuts = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h3 className={styles.title}>Produtos</h3>
        <ul className={styles.ul}>
          <li>Central de alarme</li>
          <li>Roteadores e Sinalizadores</li>
          <li>Acionadores Manuais</li>
          <li>Detectores de Incêndio</li>
          <li>Roteadores de Sinal</li>
          <li>Roteador com Acionador Automático</li>
          <li>Monitores de Alerta</li>
        </ul>
      </div>
      <div>
        <h3 className={styles.title}>Nossos projetos</h3>
        <ul className={styles.ul}>
          <li>Projeto 1</li>
          <li>Projeto 2</li>
          <li>Projeto 3</li>
          <li>Projeto 4</li>
        </ul>
      </div>
      <div>
        <h3 className={styles.title}>A Global Sonic</h3>
      </div>
      <div>
        <h3 className={styles.title}>Dúvidas</h3>
      </div>
      <div>
        <h3 className={styles.title}>Contato</h3>
      </div>
    </div>
  );
};
export default Shortcuts;
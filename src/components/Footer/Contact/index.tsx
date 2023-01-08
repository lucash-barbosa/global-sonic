import React from 'react';
import * as styles from './styles.module.scss';

import Logo from '../../../assets/icons/logo.svg';
import Facebook from '../../../assets/icons/facebook.svg';
import Youtube from '../../../assets/icons/youtube.svg';
import Linkedin from '../../../assets/icons/linkedin.svg';
import Instagram from '../../../assets/icons/instagram.svg';

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={Logo} alt='Logo da Global Sonic' />
      <div>
        <h3 className={styles.title}>Bumenau</h3>
        <ul className={styles.ul}>
          <li>
            <p>
              Rua General Osório, 4584. Complexo Industrial Ibiza. Galpão 15 –
              Salto Weissbach, Blumenau, SC CEP: 89032-240
            </p>
          </li>
          <li>(47) 3209-1808 | (47) 99906-0130</li>
          <li>contato@globalsonic.com.br</li>
        </ul>
      </div>
      <div>
        <h3 className={styles.title}>São Paulo</h3>
        <ul className={styles.ul}>
          <li>
            <p>
              Rua General Osório, 4584. Complexo Industrial Ibiza. Galpão 15 –
              Salto Weissbach, Blumenau, SC CEP: 89032-240
            </p>
          </li>
          <li>(47) 3209-1808 | (47) 99906-0130</li>
          <li>contato@globalsonic.com.br</li>
        </ul>
      </div>
      <div>
        <h4 className={styles.subtitle}>Siga a gente</h4>
        <div className={styles.wrapperIcons}>
          <a
            href='https://pt-br.facebook.com/globalsonic/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Facebook} alt='Link do Facebook' />
          </a>
          <a
            href='https://www.youtube.com/channel/UCfzumzYoLqsHtOIUauAw5Fw'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Youtube} alt='Link do Youtube ' />
          </a>
          <a
            href='https://www.linkedin.com/company/globalsonicoficial/?originalSubdomain=br'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Linkedin} alt='Link do Linkedin ' />
          </a>
          <a
            href='https://www.instagram.com/globalsonicoficial/?hl=pt'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Instagram} alt='Link do Instagram ' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

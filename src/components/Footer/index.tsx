import React from 'react';
import Contact from './Contact';
import Copyright from './Copyright';
import Shortcuts from './Shortcuts';

export const Footer = () => {
  return (
    <footer>
      <Shortcuts />
      <Contact />
      <Copyright />
    </footer>
  );
};
export default Footer;
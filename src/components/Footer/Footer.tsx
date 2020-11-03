import React from 'react';

// import cn from 'classnames';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <span>
        Make with{' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </span>
      <span>Ours Team</span>
    </footer>
  );
};

export default Footer;

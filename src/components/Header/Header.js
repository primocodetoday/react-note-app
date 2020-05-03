import React from 'react';
import Button from '../Button/Button';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';

const Header = ({ openModalFn }) => (
  <header className={styles.wrapper}>
    <p className={styles.logo}>
      YT <span>M</span>emo
    </p>
    <HeaderNavigation />
    <Button onClick={openModalFn} secondary>
      new item
    </Button>
  </header>
);

export default Header;

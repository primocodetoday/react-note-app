import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';

const Header = ({ openModalFn }) => (
  <header className={styles.wrapper}>
    <p className={styles.logo}>
      Tech <span>M</span>emo
    </p>
    <HeaderNavigation />
    <Button onClick={openModalFn} secondary>
      new item
    </Button>
  </header>
);

Header.propTypes = {
  openModalFn: PropTypes.func.isRequired,
};

export default Header;

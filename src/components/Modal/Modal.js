import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import Form from '../Form/Form';

const Modal = ({ closeModalFn }) => (
  <div className={styles.wrapper}>
    <button
      type="button"
      text="close"
      className={styles.closeButton}
      onClick={closeModalFn}
      aria-label="Close"
    />
    <Form />
  </div>
);

Modal.propTypes = {
  closeModalFn: PropTypes.func.isRequired,
};

export default Modal;

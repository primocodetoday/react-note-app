import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';

const Modal = ({ closeModalFn }) => (
  <div className={styles.wrapper}>
    <button
      type="button"
      text="close"
      className={styles.closeButton}
      onClick={closeModalFn}
    />
    <Form />
  </div>
);

export default Modal;

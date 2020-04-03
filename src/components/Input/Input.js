import React from 'react';
import styles from './Input.module.scss'
import PropTypes from 'prop-types'

const Input = ({tag:Tag, name, label, maxLength, ...props}) => ( //zmiana nazwy propsa

  <div className={styles.formItem}>
        <Tag
          className={Tag === 'textarea' ? styles.textarea : styles.input}
          type="text"
          name={name}
          id={name}
          placeholder=" "
          required
          maxLength={maxLength}
          {...props}
        />
        <label className={styles.label} htmlFor={name}>
          { label }
        </label>
        <div className={styles.formItemBar} />
      </div>
)

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLenght: PropTypes.number,
}

Input.defaultProps = {
  tag: 'input',
  maxLength: 200,
}

export default Input;
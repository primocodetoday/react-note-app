import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'

const Input = (
	{ tag: Tag, name, label, maxLength, onChange, value } // zmiana nazwy propsa tag na Tag
) => (
	<div className={styles.formItem}>
		<Tag
			className={Tag === 'textarea' ? styles.textarea : styles.input}
			type="text"
			name={name}
			id={name}
			placeholder=" "
			required
			maxLength={maxLength}
			onChange={onChange}
			value={value}
		/>
		<label className={styles.label} htmlFor={name}>
			{label}
		</label>
		<div className={styles.formItemBar} />
	</div>
)

Input.propTypes = {
	tag: PropTypes.string,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	maxLength: PropTypes.number,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
}

Input.defaultProps = {
	tag: 'input',
	maxLength: 200
}

export default Input

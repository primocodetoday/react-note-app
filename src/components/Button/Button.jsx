import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

const Button = ({ children, href, secondary, onClick }) => {
	const buttonClass = secondary ? styles.secondary : styles.button

	return (
		<>
			{href
				? (
					<a
						href={href}
						target="_blank"
						className={buttonClass}
						rel="noopener noreferrer"
					>
						{children}
					</a>
				)
				: (
					<button
						type="submit"
						aria-label={children}
						className={buttonClass}
						onClick={onClick}
					>
						{children}
					</button>
				)}
		</>
	)
}

Button.propTypes = {
	children: PropTypes.string.isRequired,
	href: PropTypes.string,
	secondary: PropTypes.bool,
	onClick: PropTypes.func
}

Button.defaultProps = {
	secondary: false,
	onClick: null,
	href: null
}

export default Button

import React from 'react'
import PropTypes from 'prop-types'
import styles from './ListItem.module.scss'
import { Button, Title } from '..'

const ListItem = ({ item }) => {
	const { image, title, description, link } = item
	const ImageTag = image ? 'img' : 'div'

	return (
		<li className={styles.wrapper}>
			{image && (
				<ImageTag
					src={image}
					className={image ? styles.image : styles.imageNone}
					alt={title}
				/>
			)}
			<div>
				<Title>{title}</Title>
				<p className={styles.description}>{description}</p>
				{link && <Button href={link}>visit page</Button>}
			</div>
		</li>
	)
}

ListItem.propTypes = {
	item: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		link: PropTypes.string,
		image: PropTypes.string
	})
}

ListItem.defaultProps = {
	item: PropTypes.shape({
		image: null,
		link: null
	})
}

export default ListItem

import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import styles from './List.module.scss'

const List = ({ items }) => (
	<>
		{items.length
			? (
				<ul className={styles.wrapper}>
					{items.map((item) => (
						<ListItem key={item.title} item={item} />
					))}
				</ul>
			)
			: (
				<h1 className={styles.noItems}>
					There&apos;s nothing here yet, please add some items.
				</h1>
			)}
	</>
)

List.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			link: PropTypes.string,
			image: PropTypes.string
		})
	).isRequired
}

export default List

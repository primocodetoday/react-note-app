import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './HeaderNavigation.module.scss'

const HeaderNavigation = () => (
	<nav>
		<ul className={styles.wrapper}>
			<li className={styles.navItem}>
				<NavLink
					className={({ isActive }) => ([
						styles.navItemLink,
						(isActive ? styles.navItemLinkActive : '')
					].join(' '))}
					to="/">
					Tech tubers
				</NavLink>
			</li>
			<li className={styles.navItem}>
				<NavLink
					className={({ isActive }) => ([
						styles.navItemLink,
						(isActive ? styles.navItemLinkActive : '')
					].join(' '))}
					to="/articles">
					Articles
				</NavLink>
			</li>
			<li className={styles.navItem}>
				<NavLink
					className={({ isActive }) => ([
						styles.navItemLink,
						(isActive ? styles.navItemLinkActive : '')
					].join(' '))}
					to="/notes">
					Notes
				</NavLink>
			</li>
		</ul>
	</nav>
)

export default HeaderNavigation

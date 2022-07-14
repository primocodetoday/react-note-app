import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styles from './Root.module.scss'
import AppContext from '../../context'
import { TubersView, ArticlesView, NotesView } from '..'
import { Header } from '../../components'
import Modal from '../../components/Modal/Modal'
import { state } from '../../data/initialState'

const Root = () => {
	const [data, setData] = useState({ ...state })

	const [isModalOpen, setModalOpen] = useState(false)

	const openModal = () => {
		setModalOpen(true)
	}

	const closeModal = () => {
		setModalOpen(false)
	}

	const addItem = (e, newItem) => {
		e.preventDefault()
		setData((prevState) => ({
			...data,
			[newItem.type]: [...prevState[newItem.type], newItem]
		}))
		closeModal()
	}

	const contextElements = {
		...data,
		addItem
	}

	return (
		<BrowserRouter>
			<AppContext.Provider value={contextElements}>
				<div className={styles.wrapper}>
					<Header openModalFn={openModal} />
					<Routes>
						<Route exact path="/" element={<TubersView/>} />
						<Route path="/articles" element={<ArticlesView/>} />
						<Route path="/notes" element={<NotesView/>} />
					</Routes>
					{isModalOpen && <Modal closeModalFn={closeModal} />}
				</div>
			</AppContext.Provider>
		</BrowserRouter>
	)
}

export default Root

// 2. fill categories with own data
// 4. Validate all props

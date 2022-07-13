import React, { useState } from 'react'
import AppContext from '../../context'
import styles from './Form.module.scss'
import { Button, Title, Input } from '..'
import Radio from './FormRadio'

const types = {
	tuber: 'tuber',
	article: 'article',
	note: 'note'
}

const descriptions = {
	tuber: 'YouTuber',
	article: 'Article',
	note: 'Note'
}

const Form = () => {
	const [form, setForm] = useState({
		type: types.tuber,
		title: '',
		link: '',
		image: '',
		description: ''
	})

	const handleRadioButtonChange = (type) => {
		setForm({
			...form,
			type // type:type
		})
	}

	const handleInputChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const { type, title, link, image, description } = form

	return (
		<AppContext.Consumer>
			{(context) => (
				<div className={styles.wrapper}>
					<Title>Add new {descriptions[type]}</Title>
					<form
						autoComplete="off"
						className={styles.form}
						onSubmit={(e) => context.addItem(e, form)}
					>
						<div className={styles.formOptions}>
							<Radio
								id={types.tuber}
								checked={type === types.tuber}
								changeFn={() => handleRadioButtonChange(types.tuber)}
							>
								YouTuber
							</Radio>
							<Radio
								id={types.article}
								checked={type === types.article}
								changeFn={() => handleRadioButtonChange(types.article)}
							>
								Article
							</Radio>
							<Radio
								id={types.note}
								checked={type === types.note}
								changeFn={() => handleRadioButtonChange(types.note)}
							>
								Note
							</Radio>
						</div>
						<Input
							onChange={handleInputChange}
							value={title}
							name="title"
							label={type === types.tuber ? 'Tuber channel' : 'Title'}
							maxLength={50}
						/>
						{type !== types.note
							? (
								<Input
									onChange={handleInputChange}
									value={link}
									name="link"
									label={type === types.tuber ? 'YouTube Link' : 'Link'}
								/>
							)
							: null}

						{type === types.tuber
							? (
								<Input
									onChange={handleInputChange}
									value={image}
									name="image"
									label="Image"
								/>
							)
							: null}
						<Input
							onChange={handleInputChange}
							value={description}
							tag="textarea"
							name="description"
							label="Description"
						/>
						<Button>add new item</Button>
					</form>
				</div>
			)}
		</AppContext.Consumer>
	)
}

export default Form

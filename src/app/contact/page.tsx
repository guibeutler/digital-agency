import React from 'react'
import Image from 'next/image'
import Button from '@components/Button'
import styles from './page.module.css'

function Contact() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Let's Keep in Touch</h1>
			<div className={styles.content}>
				<div className={styles.imgContainer}>
					<Image className={styles.img} src="/contact.png" alt="" fill={true} />
				</div>
				<form className={styles.form}>
					<input type="text" placeholder="name" className={styles.input} />
					<input type="text" placeholder="email" className={styles.input} />
					<textarea
						placeholder="message"
						className={styles.textArea}
						cols={30}
						rows={10}
					/>
					<Button text="Send" url="#" />
				</form>
			</div>
		</div>
	)
}

export default Contact

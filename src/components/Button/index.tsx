import React from 'react'
import Link from 'next/link'
import styles from './button.module.css'

interface ButtonProps {
	url: string
	text: string
}

function Button(props: ButtonProps) {
	const { url, text } = props

	return (
		<Link href={url}>
			<button className={styles.button}>{text}</button>
		</Link>
	)
}

export default Button

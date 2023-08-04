import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Button from '@components/Button'
import { items } from './data'

import styles from './page.module.css'

const getPortfolioWorkList = (cat: string) => {
	return items[cat] ?? notFound()
}

function PortfolioCategory({ params }: { params: { category: string } }) {
	const data = getPortfolioWorkList(params.category)

	return (
		<div className={styles.container}>
			<h1 className={styles.catTitle}>{params.category}</h1>

			{data.map((item) => (
				<div className={styles.item} key={item.id}>
					<div className={styles.content}>
						<h1 className={styles.title}>{item.title}</h1>
						<p className={styles.desc}>{item.desc}</p>
						<Button url="#" text="See more" />
					</div>
					<div className={styles.imgContainer}>
						<Image className={styles.img} src={item.image} fill={true} alt="" />
					</div>
				</div>
			))}
		</div>
	)
}
0
export default PortfolioCategory

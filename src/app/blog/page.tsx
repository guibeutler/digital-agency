import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import styles from './page.module.css'

async function fetchItems() {
	const res = await fetch('http://localhost:3000/api/posts', {
		cache: 'no-store',
	})

	if (!res.ok) {
		return notFound()
	}

	return res.json()
}

async function Blog() {
	const data = await fetchItems()

	return (
		<div className={styles.mainContainer}>
			{data.map((item: any) => {
				return (
					<Link
						href={`/blog/${item._id}`}
						className={styles.container}
						key={item.id}
					>
						<div className={styles.imageContainer}>
							<Image
								className={styles.image}
								src={item.img}
								alt=""
								width={400}
								height={250}
							/>
						</div>
						<div className={styles.content}>
							<h1 className={styles.title}>{item.title}</h1>
							<p className={styles.desc}>{item.desc}</p>
						</div>
					</Link>
				)
			})}
		</div>
	)
}

export default Blog

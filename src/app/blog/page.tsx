import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

async function fetchItems() {
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
			cache: 'no-store',
		})
		const items = await res.json()
		return items
	} catch (error) {
		console.log('error =>', error)
	}
}

async function Blog() {
	const data = await fetchItems()

	return (
		<div className={styles.mainContainer}>
			{data.map((item) => {
				return (
					<Link
						href={`/blog/${item.id}`}
						className={styles.container}
						key={item.id}
					>
						<div className={styles.imageContainer}>
							<Image
								className={styles.image}
								src={item.image}
								alt=""
								width={400}
								height={250}
							/>
						</div>
						<div className={styles.content}>
							<h1 className={styles.title}>{item.title}</h1>
							<p className={styles.desc}>{item.body}</p>
						</div>
					</Link>
				)
			})}
		</div>
	)
}

export default Blog

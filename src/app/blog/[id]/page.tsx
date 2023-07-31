import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'

async function fetchItem(id: string) {
	try {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}`,
			{
				cache: 'no-store',
			}
		)
		const item = await res.json()
		return item
	} catch (error) {
		console.log('error =>', error)
	}
}

async function BlogPost({ params }: { params: { id: string } }) {
	const data = await fetchItem(params.id)

	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.info}>
					<h1 className={styles.title}>{data.title}</h1>
					<p className={styles.desc}>{data.desc}</p>
					<div className={styles.author}>
						<Image
							src={data.img}
							alt=""
							width={40}
							height={40}
							className={styles.avatar}
						/>
						<span className={styles.username}>{data.username}</span>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image src={data.img} alt="" fill={true} className={styles.image} />
				</div>
			</div>
			<div className={styles.content}>
				<p className={styles.text}>{data.content}</p>
			</div>
		</div>
	)
}

export default BlogPost

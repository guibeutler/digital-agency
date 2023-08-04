'use client'
import React from 'react'
import useSWR from 'swr'
import styles from './page.module.css'

const url = 'https://jsonplaceholder.typicode.com/posts'

const fetcher = (url: string): Promise<Response> =>
	fetch(url).then((res: Response) => res.json())

function Dashboard() {
	const { data, error, isLoading } = useSWR(url, fetcher)

	if (error) return <div>failed to load</div>
	if (isLoading) return <div>loading...</div>

	return (
		<div className={styles.container}>
			<h1>Dashboard</h1>
		</div>
	)
}

export default Dashboard

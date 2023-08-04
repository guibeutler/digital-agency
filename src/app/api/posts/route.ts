import { NextResponse } from 'next/server'
import { connectDB } from '@utils/db'
import Post from '@models/PostModel'

export const GET = async (request: Request) => {
	try {
		await connectDB()
		const posts = await Post.find()
		const postsJson = JSON.stringify(posts)
		return new NextResponse(postsJson, {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		})
	} catch (error) {
		return new NextResponse('Database error', { status: 500 })
	}
}

import { NextResponse } from 'next/server'
import { connectDB } from '@utils/db'
import Post from '@models/PostModel'

export const GET = async (
	request: Request,
	{ params }: { params: { id: string } }
) => {
	const { id } = params
	try {
		await connectDB()
		const post = await Post.findById(id)
		return new NextResponse(JSON.stringify(post), {
			status: 200,
		})
	} catch (error) {
		return new NextResponse('Database error', { status: 500 })
	}
}

export const DELETE = async (
	request: Request,
	{ params }: { params: { id: string } }
) => {
	const { id } = params

	try {
		await connectDB()
		await Post.findByIdAndDelete(id)
		return new NextResponse('Deleted', { status: 200 })
	} catch (error) {
		return new NextResponse('Database error', { status: 500 })
	}
}

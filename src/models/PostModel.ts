import mongoose, { Document } from 'mongoose'

const { Schema } = mongoose

export interface IPost extends Document {
	title: string
	desc: string
	img: string
	userName: string
}

const postSchema = new Schema<IPost>(
	{
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		userName: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

let Post = mongoose.models.Post || mongoose.model('Post', postSchema)

export default Post

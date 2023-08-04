import mongoose, { Document, Schema } from 'mongoose'

export interface IUser extends Document {
	name: string
	email: string
	password: string
}

const userSchema = new Schema<IUser>(
	{
		name: {
			type: String,
			unique: true,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

export default mongoose.model<IUser>('User', userSchema)

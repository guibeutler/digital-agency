import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		const uri = process.env.DATABASE_URL || ''
		await mongoose.connect(uri)
	} catch (error) {
		throw new Error('MongoDB connection FAIL')
	}
}

export { connectDB }

import mongoose from 'mongoose';
import "dotenv/config"

const mongoUri = process.env.MONGO_URI;
export async function getDbConnection() {
	return await mongoose.createConnection(mongoUri).useDb('nei-debt');
}

import mongoose from 'mongoose';

const mongoUri =
	process.env.MONGO_URI ||
	'mongodb://mongo:YvDvUnBMJGSMkWAarXiTJwlnJkhKnncY@autorack.proxy.rlwy.net:18328';
export async function getDbConnection() {
	return await mongoose.createConnection(mongoUri).useDb('nei-debt');
}

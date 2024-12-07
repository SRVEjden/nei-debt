import mongoose from 'mongoose';

const mongoUri =
	process.env.MONGO_URI ||
	'mongodb://mongo:XujzNsGnPorMLbGZhXdIfLWTLGmlxcGv@junction.proxy.rlwy.net:39433';
export async function getDbConnection() {
	return await mongoose.createConnection(mongoUri).useDb('nei-debt');
}

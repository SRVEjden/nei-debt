import { Schema } from 'mongoose';
export function getUserModel(connection) {
	return connection.model(
		'User',
		new Schema({
			login: {
				type: String,
				require: false,
			},
			avatar: {
				type: String,
			},
			firstName: {
				type: String,
				require: true,
			},
			secondName: {
				type: String,
				require: true,
			},
			password: {
				type: String,
				require: true,
			},
		})
	);
}

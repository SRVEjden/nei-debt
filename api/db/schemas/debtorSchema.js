import { Schema } from 'mongoose';
export function getDebtorModel(connection) {
	return connection.model(
		'Debtor',
		new Schema({
			firstName: {
				type: String,
				require: true,
			},
			secondName: {
				type: String,
				require: true,
			},
			avatar: {
				type: String,
				default: '',
			},
		})
	);
}

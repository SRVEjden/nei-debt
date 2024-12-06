import { Schema } from 'mongoose';
export function getDebtModel(connection) {
	return connection.model(
		'Debt',
		new Schema({
			debtorId: {
				type: String,
				require: true,
			},
			sumOfDebt: {
				type: Number,
				default: 0,
			},
			date: {
				type: String,
			},
			creditorId: {
				type: String,
				require: true,
			},
		})
	);
}

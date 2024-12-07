import express from 'express';
import { getDbConnection } from '../db/connection.js';
import { getDebtorModel } from '../db/schemas/debtorSchema.js';
const router = express.Router();

router.post('/add', async (req, res) => {
	const { firstName, secondName } = req.body;
	try {
		const connection = await getDbConnection();
		const debtorModel = getDebtorModel(connection);
		const newDebtor = new debtorModel({
			firstName,
			secondName,
		});
		await newDebtor.save();
		connection.close();
		return res.status(200).send({ message: 'Created', id: newDebtor._id });
	} catch (error) {
		console.log(error);
		return res.status(500).send({ message: 'Internal Server Error' });
	}
});

router.post('/edit', async (req, res) => {
	const { firstName, secondName, avatar, _id } = req.body;
	try {
		const connection = getDbConnection();
		const debtorModel = getDebtorModel(connection);
		const result = await debtorModel.findByIdAndUpdate(_id, {
			firstName,
			secondName,
			avatar,
		});
		connection.close();
		return res.status(200).send({ message: 'Edited', id: result._id });
	} catch (error) {
		console.log(error);
		return res.status(500).send({ message: 'Internal Server Error' });
	}
});

router.delete('/delete', async (req, res) => {
	const { _id } = req.body;
	try {
		const connection = await getDbConnection();
		const debtorSchema = getDebtorModel(connection);
		const result = await debtorSchema.findByIdAndDelete(_id);
		connection.close();
		if (result) {
			return res.status(200).send({ message: 'Deleted', id: result._id });
		}
		return res.status(400).send({ message: 'Invalid Data' });
	} catch (error) {
		console.log(error);
		return res.status(500).send({ message: 'Internal server error' });
	}
});
export { router as 'debtorRouter' };

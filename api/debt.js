import express from 'express';
import { getDbConnection } from './db/connection.js';
import { getDebtModel } from './db/debtSchema.js';

const router = express.Router();

router.post('/add', async (req, res) => {
	const { debtorId, sumOfDebt, date } = req.body;
	try {
		const connection = await getDbConnection();
		const debtSchema = getDebtModel(connection);
		const newDebt = new debtSchema({
			debtorId,
			sumOfDebt,
			date,
		});
		await newDebt.save();
		connection.close();
		res.status(200).send({ message: 'Debt added', id: newDebt._id });
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: 'Internal server error' });
	}
});

router.post('/edit', async (req, res) => {
	const { _id, debtorId, sumOfDebt, date } = req.body;
	try {
		const connection = await getDbConnection();
		const debtSchema = getDebtModel(connection);
		const result = await debtSchema.findByIdAndUpdate(_id, {
			debtorId,
			sumOfDebt,
			date,
		});
		connection.close();
		if (result) {
			res.status(200).send({ message: 'Edited', id: result._id });
		} else {
			res.status(400).send({ message: 'Invalid Data' });
		}
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: 'Internal server error' });
	}
});

router.delete('/delete', async (req, res) => {
	const { _id } = req.body;
	try {
		const connection = await getDbConnection();
		const debtSchema = getDebtModel(connection);
		const result = await debtSchema.findByIdAndDelete(_id);
		connection.close();
		if (result) {
			res.status(200).send({ message: 'Deleted', id: result._id });
		}
		res.status(400).send({ message: 'Invalid Data' });
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: 'Internal server error' });
	}
});
export { router as 'debtRouter' };

import express from 'express';
import { getDbConnection } from './db/connection.js';
import { getDebtModel } from './db/debtSchema.js';
const router = express.Router();
async function getDebtList(listOfDebtorsUnique, id, debtModel) {
	return listOfDebts;
}
router.get('/getNeiDebtors/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const connection = await getDbConnection();
		const debtModel = getDebtModel(connection);
		const listOfDebts = await debtModel.find(
			{
				creditorId: id,
			},
			'sumOfDebt debtorId creditorId date'
		);
		connection.close();
		const listOfDebtorsUnique = new Set();
		const result = [];
		listOfDebts.map(debtor => {
			listOfDebtorsUnique.add(debtor.debtorId);
		});
		listOfDebtorsUnique.forEach(debtorId => {
			const sumOfDebt = listOfDebts
				.filter(debt => debt.debtorId == debtorId)
				.reduce((acc, curr) => acc + curr.sumOfDebt, 0);
			result.push({ debtorId, sumOfDebt });
		});

		res.status(200).json(result);
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: 'Internal Server Error' });
	}
});

router.get('/getNeiDebtor/:creditorId/:debtorId', async (req, res) => {
	const { creditorId, debtorId } = req.params;
	try {
		const connection = await getDbConnection();
		const debtModel = getDebtModel(connection);
		const listOfDebts = await debtModel.find(
			{
				creditorId,
				debtorId,
			},
			'creditorId debtorId sumOfDebt date'
		);
		connection.close();
		if (listOfDebts) {
			res.status(200).json(listOfDebts);
		} else {
			res.status(200).send({ message: 'Debts not founded' });
		}
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: 'Internal Server Error' });
	}
});
export { router as 'neiDebtRouter' };

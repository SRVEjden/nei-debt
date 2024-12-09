import express from 'express';
import { getDbConnection } from '../db/connection.js';
import { getDebtModel } from '../db/schemas/debtSchema.js';
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
		const listOfDebtorsUnique = new Set();
		const result = [];
		listOfDebts.map(debtor => {
			listOfDebtorsUnique.add(debtor.debtorId);
		});
		for (const debtorId of listOfDebtorsUnique) {
			const sumOfDebt = listOfDebts
				.filter(debt => debt.debtorId == debtorId)
				.reduce((acc, curr) => acc + curr.sumOfDebt, 0);
			const debtor = await debtModel.findById(debtorId);
			result.push({
				debtorId,
				sumOfDebt,
			});
		}

		res.status(200).json(result);
		return connection.close();
	} catch (error) {
		console.log(error);
		return res.status(500).send({ message: 'Internal Server Error' });
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
			return res.status(200).json(listOfDebts);
		} else {
			return res.status(200).send({ message: 'Debts not founded' });
		}
	} catch (error) {
		console.log(error);
		return res.status(500).send({ message: 'Internal Server Error' });
	}
});
export { router as 'neiDebtRouter' };

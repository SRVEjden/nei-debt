import express from 'express';
import { getDbConnection } from '../db/connection.js';
import { getUserModel } from '../db/schemas/userSchema.js';
const router = express.Router();

router.post('/register', async (req, res) => {
	const { firstName, secondName, password, login } = req.body;
	try {
		const connection = await getDbConnection();
		const userModel = await getUserModel(connection);
		const user = await userModel.findOne({
			login,
		});
		if (user) {
			connection.close();
			return res
				.status(200)
				.send({ message: 'Пользователь с таким именем уже существует' });
		}
		const newUser = new userModel({
			login,
			firstName,
			secondName,
			password,
		});
		await newUser.save();
		connection.close();
		return res.status(200).send({ message: 'Created', id: newUser._id });
	} catch (error) {
		console.log(error);
		return res.status(500).send({ message: 'Internal Server Error' });
	}
});
export { router as 'userRouter' };

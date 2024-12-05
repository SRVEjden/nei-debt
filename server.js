import express from 'express';
import next from 'next';
import { debtRouter } from './api/debt.js';
const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		const server = express();
		server.use(express.urlencoded({ extended: true }));
		server.use(express.json());
		server.use('/api/debt', debtRouter);
		server.get('*', (req, res) => {
			return handle(req, res);
		});
		server.listen(port, err => {
			if (err) console.log(err);
			console.log(`Server started on port ${port}`);
		});
	})
	.catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	});

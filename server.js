import 'dotenv/config';
import express from 'express';
import next from 'next';
import { middlewaresInitialization } from './api/middlewares/middlewaresInitialization.js';
import { mainRouter } from './api/routers/mainRouter.js';
import './strategies/local-strategy.js';
const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		const server = express();
		server.use(middlewaresInitialization);
		server.use('/', mainRouter);
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

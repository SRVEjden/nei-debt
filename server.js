import cookieParser from 'cookie-parser';
import express from 'express';
import session from 'express-session';
import next from 'next';
import passport from 'passport';
import { debtRouter } from './api/debt.js';
import { neiDebtRouter } from './api/nei-debt.js';
import { userRouter } from './api/user.js';
import './strategies/local-strategy.js';
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
		server.use(cookieParser('HelloWorld'));
		server.use(
			session({
				secret: 'secretWord',
				saveUninitialized: false,
				resave: false,
				cookie: {
					maxAge: 60000 * 60,
				},
			})
		);
		server.use(passport.initialize());
		server.use(passport.session());
		server.use('/api/debt', debtRouter);
		server.use('/api', neiDebtRouter);
		server.use('/api', userRouter);
		server.post('/api/auth', passport.authenticate('local'), (req, res) => {
			res.json(req.session.user);
		});
		server.get('/api/auth/status', (req, res) => {
			if (req.user) return res.status(200).json(req.user);
			return res.sendStatus(401);
		});
		server.post('/api/auth/logout', (req, res) => {
			if (!req.user) return res.sendStatus(401);
			req.logout(err => {
				return err ? res.sendStatus(400) : res.sendStatus(200);
			});
		});
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

import express from 'express';
import { authRouter } from './authRouter.js';
import { debtRouter } from './debt.js';
import { debtorRouter } from './debtor.js';
import { neiDebtRouter } from './neiDebt.js';
import { userRouter } from './user.js';
const router = express.Router();

router.use('/api/debt', debtRouter);
router.use('/api/neiDebt', neiDebtRouter);
router.use('/api/user', userRouter);
router.use('/api', authRouter);
router.use('/api/debtor', debtorRouter);
export { router as 'mainRouter' };

import express from 'express';
import passport from 'passport';
const router = express.Router();

router.post('/auth', passport.authenticate('local'), (req, res) => {
	return res.json(req.session.user);
});
router.get('/auth/status', (req, res) => {
	if (req.user) return res.status(200).json(req.user);
	return res.sendStatus(401);
});
router.post('/auth/logout', (req, res) => {
	if (!req.user) return res.sendStatus(401);
	req.logout(err => {
		return err ? res.sendStatus(400) : res.sendStatus(200);
	});
});

export { router as 'authRouter' };

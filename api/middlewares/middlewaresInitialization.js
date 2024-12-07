import cookieParser from 'cookie-parser';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(cookieParser('HelloWorld'));
router.use(
	session({
		secret: 'secretWord',
		saveUninitialized: false,
		resave: false,
		cookie: {
			maxAge: 60000 * 60,
		},
	})
);
router.use(passport.initialize());
router.use(passport.session());

export { router as 'middlewaresInitialization' };

import cookieParser from 'cookie-parser';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(cookieParser(process.env.SECRET_COOKIE));
router.use(
	session({
		secret: process.env.SECRET_SESSION,
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

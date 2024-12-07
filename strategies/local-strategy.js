import passport from 'passport';
import { Strategy } from 'passport-local';
import { getDbConnection } from '../api/db/connection.js';
import { getUserModel } from '../api/db/schemas/userSchema.js';

passport.serializeUser((user, done) => {
	done(null, user._id);
});
passport.deserializeUser(async (id, done) => {
	try {
		const connection = await getDbConnection();
		const userModel = getUserModel(connection);
		const user = await userModel.findById(
			id,
			'login firstName secondName avatar'
		);
		connection.close();
		if (!user) throw new Error('User not found');
		done(null, user);
	} catch (error) {
		done(error, null);
	}
});
export default passport.use(
	new Strategy({ usernameField: 'login' }, async (username, password, done) => {
		try {
			const connection = await getDbConnection();
			const userModel = getUserModel(connection);
			const user = await userModel.findOne({ login: username });
			if (!user) throw Error('User not found');
			if (user.password != password) throw Error('Invalid credentials');
			done(null, user);
		} catch (error) {
			done(err, null);
		}
	})
);

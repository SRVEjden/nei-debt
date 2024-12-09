'use client';

import { createContext } from 'react';

export const AuthContext = createContext({
	user: null,
	login: null,
	logout: null,
	isAuth: false,
});

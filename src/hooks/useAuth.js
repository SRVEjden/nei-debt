'use client';

const { useState, useCallback, useEffect } = require('react');

export default function useAuth() {
	const [user, setUser] = useState({});
	const login = useCallback(user => {
		setUser(user);
		localStorage.setItem('user', JSON.stringify(user));
	}, []);
	const logout = useCallback(() => {
		setUser({});
		localStorage.removeItem('user');
	}, []);
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('user'));
		if (data && data._id) {
			setUser(data);
		}
	}, [login]);
	return { login, logout, user };
}

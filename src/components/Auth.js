'use client';
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';
import { useState } from 'react';

function Auth() {
	const [registerState, setRegisterState] = useState(false);
	return (
		<div className='auth'>
			{registerState ? (
				<RegisterForm />
			) : (
				<LoginForm onClick={() => setRegisterState(true)} />
			)}
		</div>
	);
}

export default Auth;

'use client';
import Auth from '@/components/Auth';
import { AuthContext } from '@/context/authContext';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
export default function Home() {
	const { user, login, logout } = useAuth();
	const isAuth = user && user._id;
	const router = useRouter();
	return (
		<AuthContext.Provider value={{ user, login, logout, isAuth }}>
			<div className={'home-page'}>
				<div className='h-screen flex justify-center items-center'>
					{!isAuth ? <Auth /> : router.push(`/debts/${user._id}`)}
				</div>
			</div>
		</AuthContext.Provider>
	);
}

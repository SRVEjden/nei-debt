'use client'
import NewDebtForm from "@/components/NewDebtForm";
import NavBar from "@/components/NavBar";
import DebtorList from "@/components/DebtorList";
import Auth from "@/components/Auth";
import {useState, useEffect} from "react";

export default function Home() {
	const [isAuth, setIsAuth] = useState(false);
	useEffect(() => {
		setIsAuth(Boolean(localStorage.getItem('user')))
	}, []);

	const handleAuthSuccess = () => {
	  return setIsAuth(true);
	}
	return <div className={"home-page"}>
		<NavBar isAuth={isAuth}></NavBar>
		{!isAuth && <Auth onAuthSuccess = {handleAuthSuccess} />}
		<NewDebtForm name={"Aboba"}></NewDebtForm>
		<div className="h-screen flex justify-center items-center">
			<DebtorList debtors={[{firstName: 'debil', secondName: 'debilovich', _id: '1'}, {firstName: 'debil2', secondName: 'debilovich', _id: '2'}, {firstName: 'debil3', secondName: 'debilovich', _id: '3'}, {firstName: 'debil4', secondName: 'debilovich', _id: '4'}, {firstName: 'debil5', secondName: 'debilovich', _id: '5'}]}></DebtorList>
		</div>
	</div>;
}

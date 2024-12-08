import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import NewDebtForm from "@/components/NewDebtForm";
import NavBar from "@/components/NavBar";
import DebtorCard from "@/components/DebtorCard";
import DebtorList from "@/components/DebtorList";

export default function Home({isAuth = false}) {
	return <div className={"home-page"}>
		<NavBar isAuth={isAuth}></NavBar>
		<RegisterForm></RegisterForm>
		<LoginForm></LoginForm>
		<NewDebtForm name={"Aboba"}></NewDebtForm>
		<div className="h-screen flex justify-center items-center">
			<DebtorList debtors={[{firstName: 'debil', secondName: 'debilovich', _id: '1'}, {firstName: 'debil2', secondName: 'debilovich', _id: '2'}, {firstName: 'debil3', secondName: 'debilovich', _id: '3'}, {firstName: 'debil4', secondName: 'debilovich', _id: '4'}, {firstName: 'debil5', secondName: 'debilovich', _id: '5'}]}></DebtorList>
		</div>
	</div>;
}

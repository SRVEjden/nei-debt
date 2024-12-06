import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import NewDebtForm from "@/components/NewDebtForm";
import NavBar from "@/components/NavBar";

export default function Home() {
	return <div className={"home-page"}>
		<NavBar isAuth={true}></NavBar>
		<RegisterForm></RegisterForm>
	</div>;
}

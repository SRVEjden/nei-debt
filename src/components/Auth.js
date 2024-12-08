'use client'
import RegisterForm from "@/components/RegisterForm";
import LoginForm from "@/components/LoginForm";
import {useState} from "react";

function Auth({onAuthSuccess}) {
    const [registerState, setRegisterState] = useState(false);
    return (
        <div className="auth">
            {
                registerState ? <RegisterForm/> : <LoginForm onAuthSuccess = {onAuthSuccess} onClick= {() => setRegisterState(true)}/>
            }
        </div>
    );
}

export default Auth;
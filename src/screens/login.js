import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from "react";
import axios from "axios";
import { LoginDiv, Logo, InputBox, LoginButton, FontButton, OtherPage } from "../components/login"
import { loginPostUrl, loginPostSendObj } from "./apiUrls.js"
import { UserContext } from "../App";

export default function RenderLogin() {
    const [disableInput, setDisableInput] = useState(false);
    const navigate = useNavigate();
    const [login, setLogin] = useState(loginPostSendObj)
    const loginProps = { login: login, setLogin: setLogin };
    const userData = useContext(UserContext);
    return (
        <LoginDiv>
            <Logo>MyWallet</Logo>
            <InputBox data-identifier="email-input" placeholder="E-mail" onChange={e => updateEmail(e.target.value, loginProps)} disabled={disableInput}></InputBox>
            <InputBox data-identifier="password-input" placeholder="Senha" onChange={e => updatePassword(e.target.value, loginProps)} disabled={disableInput}></InputBox>
            <LoginButton data-identifier="login-btn" onClick={() => { Login(loginProps, userData, navigate, setDisableInput) }} disabled={disableInput}>
                <FontButton>
                    Entrar
                </FontButton>
            </LoginButton>
            <Link to="/cadastro" style={{ textDecoration: 'none' }}>
                <OtherPage data-identifier="signup-link">Não tem uma conta? Cadastre-se!</OtherPage>
            </Link>
        </LoginDiv>
    );
}

function Login(loginProps, userData, navigate, setDisableInput) {
    setDisableInput(true);
    const request = axios.post(loginPostUrl, loginProps.login);
    const setUser = userData.setUser;
    request.then(server => {
        setUser({name: server.data.name,
            token: server.data.token});
        console.log(server.data)
    });
    request.then((server) => {
        navigate('/home');
    });
    request.catch((error) => error.response.data);
    request.catch((error) => { alert("Erro no login") });
    setDisableInput(false);
}

function updateEmail(email, loginProps) {
    const setLogin = loginProps.setLogin;
    const login = loginProps.login;
    setLogin(
        {
            email: email,
            password: login.password
        }
    );
}

function updatePassword(password, loginProps) {
    const setLogin = loginProps.setLogin;
    const login = loginProps.login;
    setLogin(
        {
            email: login.email,
            password: password
        }
    );
}



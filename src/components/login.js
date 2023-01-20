import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from "react";
import axios from "axios";
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
        setUser(server.data);
        localStorage.setItem("email", server.data.email);
        localStorage.setItem("password", server.data.password);
    });
    request.then((server) => {
        if (server.data.membership === null) {
            navigate('/subscriptions');
        } else {
            navigate('/home');
        }
    });
    request.catch((error) => error.response.data);
    request.catch((error) => { alert("Erro no login") });
    setDisableInput(false);
}

function auxSetLogin(setLogin, email, password) {
    setLogin({
        email: email,
        password: password
    })
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

const LoginDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
`

const Logo = styled.p`
font-family: 'Saira Stencil One';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 50px;
color: #FFFFFF;
`

const InputBox = styled.input`
box-sizing: border-box;
width: 326px;
height: 58px;
left: 24px;
top: 304px;
background: #FFFFFF;
border-radius: 5px;
padding: 0px 10px;
margin: 10px 0px;
::placeholder{
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #000000;
}
`

const LoginButton = styled.button`
width: 326px;
height: 46px;
left: 23px;
top: 375px;
margin: 7px 0px;
background-color: #A328D6;
border-radius: 5px;
`
const FontButton = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: #FFFFFF;
`

const OtherPage = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;
color: #FFFFFF;
`

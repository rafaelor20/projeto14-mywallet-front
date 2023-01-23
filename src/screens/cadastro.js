import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import { RegisterDiv, Logo, InputBox, LoginButton, FontButton, OtherPage } from '../components/cadastro.js';
import { registerPostUrl, registerPostObj } from "./apiUrls.js";

export default function Cadastro() {
    const [disableInput, setDisableInput] = useState(false);
    const [user, setUser] = useState(registerPostObj);
    const userProps = { user: user, setUser: setUser }
    const navigate = useNavigate();

    return (
        <RegisterDiv>
            <Logo>MyWallet</Logo>
            <InputBox data-identifier="user-name-input" placeholder="Nome" onChange={e => updateName(e.target.value, userProps)} disabled={disableInput}></InputBox>
            <InputBox data-identifier="email-input" placeholder="E-mail" onChange={e => updateEmail(e.target.value, userProps)} disabled={disableInput}></InputBox>
            <InputBox data-identifier="password-input" placeholder="Senha" onChange={e => updatePassword(e.target.value, userProps)} disabled={disableInput}></InputBox>
            <InputBox data-identifier="user-image-input" placeholder="Confirme a senha" onChange={e => updateConfirmPassword(e.target.value, userProps)} disabled={disableInput}></InputBox>
            <LoginButton data-identifier="signup-btn" onClick={() => Register(userProps, navigate, setDisableInput)} disable={disableInput}>
                <FontButton>
                    Cadastrar
                </FontButton>
            </LoginButton>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <OtherPage data-identifier="login-link">Já tem uma conta? Faça login!</OtherPage>
            </Link>
        </RegisterDiv>
    );
}

function Register(userProps, navigate, setDisableInput) {
    setDisableInput(true);
    console.log(userProps.user)
    const request = axios.post(registerPostUrl, userProps.user);
    request.then(() => { navigate('/') });
    request.catch((error) => error.response.data);
    request.catch(() => console.log(userProps.user));
    request.catch((error) => { alert("Erro no cadastro") });
    setDisableInput(false);
}

function updateEmail(email, userProps) {
    const setUser = userProps.setUser;
    const user = userProps.user;
    setUser(
        {
            email: email,
            name: user.name,
            password: user.password,
            confirmPassword: user.confirmPassword,
            transfers: userProps.user.transfers
        }
    );
}

function updatePassword(password, userProps) {
    const setUser = userProps.setUser;
    const user = userProps.user;
    setUser(
        {
            email: user.email,
            name: user.name,
            password: password,
            confirmPassword: user.confirmPassword,
            transfers: userProps.user.transfers
        }
    );
}

function updateName(name, userProps) {
    const setUser = userProps.setUser;
    const user = userProps.user;
    setUser(
        {
            email: user.email,
            name: name,
            password: user.password,
            confirmPassword: user.confirmPassword,
            transfers: userProps.user.transfers
        }
    );
}

function updateConfirmPassword(confirmPassword, userProps) {
    const setUser = userProps.setUser;
    const user = userProps.user;
    setUser(
        {
            email: user.email,
            name: user.name,
            password: user.password,
            confirmPassword: confirmPassword,
            transfers: userProps.user.transfers
        }
    );
}


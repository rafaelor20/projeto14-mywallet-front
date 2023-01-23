import axios from "axios";
import dayjs from "dayjs";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Screen, Welcome, Content, InputBox, 
    LoginButton, FontButton
} from "../components/newEntry";
import {transferPostUrl} from "./apiUrls.js";
import { UserContext } from "../App";

export default function NewEntry() {
    const navigate = useNavigate();
    const userData = useContext(UserContext);
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    return (
        <Screen>
            <Welcome>Nova saída</Welcome>
            <Content>
                <InputBox placeholder="Valor" onChange={e => updateValue(e.target.value, setValue)}/>
                <InputBox placeholder="Descrição" onChange={e => updateDescription(e.target.value, setDescription)}/>
            </Content>
            <LoginButton onClick={()=>{registerTransfer(transferPostUrl, navigate, userData, value, description)}}>
                <FontButton>
                    Salvar entrada
                </FontButton>
            </LoginButton>
        </Screen>
    )
};

function registerTransfer(transferPostUrl, navigate, userData, value, description){
    const transfer = {
        name: userData.user.name,
        date: dayjs().format('DD:MM'),
        value: Number(value),
        description: description
    }
    const request = axios.post(transferPostUrl, transfer);
    request.then((server) => {
        navigate('/home');
    });
    request.catch((error) => error.response.data);
    request.catch((error) => { alert("Erro ao enviar dados") });
}

function updateValue(value, setValue){
    setValue(value);
}

function updateDescription(description, setDescription){
    setDescription(description);
}
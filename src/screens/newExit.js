import axios from "axios";
import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Screen, Welcome, Content, InputBox, 
    LoginButton, FontButton
} from "../components/newExit";

export default function NewExit() {
    return (
        <Screen>
            <Welcome>Nova entrada</Welcome>
            <Content>
                <InputBox placeholder="Valor" />
                <InputBox placeholder="Descrição" />
            </Content>
            <LoginButton>
                <FontButton>
                    Salvar saída
                </FontButton>
            </LoginButton>
        </Screen>
    )
}
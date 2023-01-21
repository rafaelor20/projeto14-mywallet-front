
import axios from "axios";
import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Screen, Welcome, Content, InputBox, 
    LoginButton, FontButton
} from "../components/newEntry";

export default function NewEntry() {
    return (
        <Screen>
            <Welcome>Nova entrada</Welcome>
            <Content>
                <InputBox placeholder="Valor" />
                <InputBox placeholder="Descrição" />
            </Content>
            <LoginButton>
                <FontButton>
                    Salvar entrada
                </FontButton>
            </LoginButton>
        </Screen>
    )
}


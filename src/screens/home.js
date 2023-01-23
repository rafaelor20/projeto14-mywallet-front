import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Container, TopBar, Welcome,
    ExitImg, Content, NoInfo, InfoBox,
    InfoDate, InfoPrice, Info, BottomBar,
    NewInfoDiv, NewInfoText, NewInfoCircle,
    NewInfoMinus, NewInfoPlus
} from "../components/home";
import exit from "../assets/exit.png"
import circle from "../assets/circle.png"
import plus from "../assets/plus.png"
import minus from "../assets/minus.png"
import { UserContext } from "../App";
import { transfersPostUrl } from "../screens/apiUrls"

export default function Home() {
    const userData = useContext(UserContext);
    const [registers, setRegisters] = useState([]);

    useEffect(() => {
        getRegisters(transfersPostUrl, setRegisters, userData);
        console.log(registers);
    }, [getRegisters]);

    return (
        <Container>
            <TopBar>
                <Welcome>Olá, {userData.user.name}</Welcome>
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                    <ExitImg src={exit} />
                </Link>
            </TopBar>
            <Content>
                <>{RenderRegistersList(registers)}</>
            </Content>
            <BottomBar>
                <Link to="/nova-entrada" style={{ textDecoration: 'none' }}>
                    <NewInfoDiv>
                        <NewInfoCircle src={circle} />
                        <NewInfoPlus src={plus} />
                        <NewInfoText>Nova</NewInfoText>
                        <NewInfoText>entrada</NewInfoText>
                    </NewInfoDiv>
                </Link>
                <Link to="/nova-saida" style={{ textDecoration: 'none' }}>
                    <NewInfoDiv>
                        <NewInfoCircle src={circle} />
                        <NewInfoMinus src={minus} />
                        <NewInfoText>Nova</NewInfoText>
                        <NewInfoText>saída</NewInfoText>
                    </NewInfoDiv>
                </Link>
            </BottomBar>
        </Container >
    );
}

function RenderRegistersList(registers) {
    if (registers.length === 0) {
        return (
            <>
                <NoInfo>Não há registros de</NoInfo>
                <NoInfo>entrada ou saída</NoInfo>
            </>
        )
    } else {
        return (
            <>{registers.map(RenderRegister)}</>
        )
    }
}

function RenderRegister(register) {
    return (
        <InfoBox>
            <InfoDate>30/11</InfoDate>
            <Info>{register.description}</Info>
            <InfoPrice>{register.value}</InfoPrice>
        </InfoBox>
    )
}

function getRegisters(transfersPostUrl, setRegisters, userData) {
    const request = axios.get(transfersPostUrl, userData.user.name);
    request.then(server => {
        setRegisters(server.data)
    })
    request.catch((error) => error.response.data);
}






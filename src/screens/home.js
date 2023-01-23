import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Container, TopBar, Welcome,
    ExitImg, Content, NoInfo, InfoBox,
    InfoDate, InfoPrice, Info, BalanceDiv, BalanceFont,
    BottomBar, NewInfoDiv, NewInfoText, 
    NewInfoCircle, NewInfoMinus, NewInfoPlus
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
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        getRegisters(transfersPostUrl, setRegisters, userData);
        setBalance(calcBalance(registers));
        console.log(registers);
        console.log(balance)
    }, [getRegisters, calcBalance]);

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
                <BalanceDiv>
                    <BalanceFont>SALDO</BalanceFont>
                    <InfoPrice>{balance}</InfoPrice>
                </BalanceDiv>
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
            <InfoDate>{register.date}</InfoDate>
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


function calcBalance(registers){
    let balance = 0;
    for (const element of registers){
        balance = balance + element.value;
    }
    return balance;
}



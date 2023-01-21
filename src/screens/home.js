import axios from "axios";
import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { Container, TopBar, Welcome, 
    ExitImg, Content, NoInfo, InfoBox, 
    InfoDate, InfoPrice, Info, BottomBar,
    NewInfoDiv, NewInfoText, NewInfoCircle,
    NewInfoMinus, NewInfoPlus} from "../components/home";
import exit from "../assets/exit.png"
import circle from "../assets/circle.png"
import plus from "../assets/plus.png"
import minus from "../assets/minus.png"

export default function Home() {
    return (
        <Container>
            <TopBar>
                <Welcome>Olá, Fulano</Welcome>
                <ExitImg src={exit} />
            </TopBar>
            <Content>
                <NoInfo>Não há registros de</NoInfo>
                <NoInfo>entrada ou saída</NoInfo>
                <InfoBox>
                    <InfoDate>30/11</InfoDate>
                    <Info>Almoço mãe</Info>
                    <InfoPrice>39,90</InfoPrice>
                </InfoBox>
            </Content>
            <BottomBar>
                <NewInfoDiv>
                    <NewInfoCircle src={circle}/>
                    <NewInfoPlus src={plus}/>
                    <NewInfoText>Nova</NewInfoText>
                    <NewInfoText>entrada</NewInfoText>
                </NewInfoDiv>
                <NewInfoDiv>
                    <NewInfoCircle src={circle}/>
                    <NewInfoMinus src={minus}/>
                    <NewInfoText>Nova</NewInfoText>
                    <NewInfoText>saída</NewInfoText>
                </NewInfoDiv>
            </BottomBar>
        </Container>
    );
}








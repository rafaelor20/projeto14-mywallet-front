import styled from "styled-components";
import axios from "axios";
import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import exit from "./assets/exit.png"
import circle from "./assets/circle.png"
import plus from "./assets/plus.png"
import minus from "./assets/minus.png"

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

const Container = styled.div`
padding: 20px 20px;
`

const TopBar = styled.div`
display: flex;
justify-content: space-between;
`

const Welcome = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 31px;
color: #FFFFFF;
`

const ExitImg = styled.img`
width: 23px;
height: 24px;
`

const Content = styled.div`
width: 326px;
height: 446px;
left: 25px;
top: 78px;
background: #FFFFFF;
border-radius: 5px;
padding: 10px 10px;
`

const NoInfo = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
text-align: center;
color: #868686;
`

const InfoBox = styled.div`
display: flex;
justify-content: space-between;
margin: 15px 0px;
`

const Info = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #000000;
text-align: center;
`

const InfoPrice = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: right;
color: #C70000;
`

const InfoDate = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #C6C6C6
text-align: left;
`

const BottomBar = styled.div`
display: flex;
justify-content: space-between;
`

const NewInfoDiv = styled.div`
position: relative;
width: 135px;
height: 64px;
margin: 10px 0px;
justify-content: space-between;
padding: 10px 10px;
background-color: #A328D6;
border-radius: 5px;
`

const NewInfoCircle = styled.img`
width: 22px;
height: 22px;
`

const NewInfoPlus= styled.img`
width: 9px;
height: 9px;
position: absolute;
top: 16px;
left: 16px;
`

const NewInfoMinus= styled.img`
width: 9px;
height: 3px;
position: absolute;
top: 19px;
left: 16px;
`

const NewInfoText = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 20px;
color: #FFFFFF;
`






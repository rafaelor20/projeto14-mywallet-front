import styled from "styled-components";
import axios from "axios";
import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import exit from "./assets/exit.png"

export default function Home(){
    return (
        <Container>
            <Welcome>Olá, Fulano</Welcome>
            <ExitImg src={exit}/>
            <Content>
                <NoInfo>Não há registros de entrada ou saída</NoInfo>
                <InfoBox>
                    <InfoDate>30/11</InfoDate>
                    <Info>Almoço mãe</Info>
                    <InfoPrice>39,90</InfoPrice>
                </InfoBox>
            </Content>
        </Container>
    );
}

const Container = styled.div`
padding: 20px 20px;
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

const NewInfoDiv = styled.div`
width: 156px;
height: 114px;
background-color: #A328D6;
border-radius: 5px;
`

const NewInfoImg = styled.img`
width: 22px;
height: 22px;
`

const NewInfoText = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 20px;
color: #FFFFFF;
`
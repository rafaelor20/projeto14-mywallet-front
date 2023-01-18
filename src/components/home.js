import styled from "styled-components";
import axios from "axios";
import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import iconUser from "./assets/userIcon.png"
import { deletePlanUrl } from "./apiUrls";
import { loginPostUrl} from "./apiUrls.js"


export default function Home() {
    const userData = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        Login(userData, navigate);
    }, [navigate, userData]);
    const image = userData.user.membership.image;
    const perks = userData.user.membership.perks;
    return (
        <Container>
            <UserIcon src={iconUser} alt="user icon" />
            <ContainerImg>
                <ImgD src={image} alt="" />
            </ContainerImg>
            <Content>
                <Title>Olá, {userData.user.name}</Title>
                <ContainerButtons>
                    <>{perks.map(RenderPerk)}</>
                </ContainerButtons>
            </Content>
            <Footer>
                <Link to="/subscriptions" style={{ textDecoration: 'none' }}>
                    <Button>
                        <FontButton>Mudar plano</FontButton>
                    </Button>
                </Link>
                <RedButton onClick={()=>{RemoveSub(userData, navigate)}}><FontButton>Cancelar plano</FontButton></RedButton>
            </Footer>
        </Container>
    )
}

function RenderPerk(perk){
    return (
        <Button onClick={()=>{OpenLink(perk.link)}}><FontButton>{perk.title}</FontButton></Button>
    )
}

function OpenLink(link){
    window.open(link);
}

function RemoveSub(userData, navigate){
    const request = axios.delete(deletePlanUrl, { headers: { Authorization: `Bearer ${userData.user.token}` } });
    request.then(()=>navigate("/subscriptions"))
    request.catch((error) => error.response.data);
}

function Login(userData, navigate) {
    const login = {
        email: userData.user.email, 
        password: userData.user.password
    };
    const request = axios.post(loginPostUrl, login);
    const setUser = userData.setUser;
    request.then(server => { setUser(server.data) });
    request.catch((error) => error.response.data);
    request.catch((error) => { alert("Faça o login novamente por favor") });
    request.catch((error) => { navigate("/") });
}

const Container = styled.div`
padding: 20px 20px;
`

const UserIcon = styled.img`
width: 34px;
height: 33px;
position: absolute;
top: 20px;
right: 20px;
`

const ContainerImg = styled.div`
position: relative;
`

const ImgD = styled.img`
width: 49px;
height: 50px;
`


const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Title = styled.p`
margin: 20px 20px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
`

const ContainerButtons = styled.div`
margin: 20px 0px 0px 0px;
`

const Button = styled.button`
margin: 5px 0px;
width: 298px;
height: 52px;
background: #FF4791;
border-radius: 8px;
display: flex;
justify-content:center;
align-items:center;
`
const RedButton = styled(Button)`
background: #FF4747;
`

const FontButton = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
`

const Footer = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
left: 0px;
bottom: 0px;
margin: 15px 0px;
`
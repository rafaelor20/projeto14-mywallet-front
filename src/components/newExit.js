import styled from "styled-components";

export const Screen = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
padding: 10vh 10vw;
`

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Welcome = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 31px;
color: #FFFFFF;
`

export const InputBox = styled.input`
box-sizing: border-box;
width: 326px;
height: 58px;
left: 24px;
top: 304px;
background: #FFFFFF;
border-radius: 5px;
padding: 0px 10px;
margin: 10px 0px;
::placeholder{
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #000000;
}
`

export const LoginButton = styled.button`
width: 326px;
height: 46px;
left: 23px;
top: 375px;
margin: 7px 0px;
background-color: #A328D6;
border-radius: 5px;
`
export const FontButton = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: #FFFFFF;
`
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { useState, createContext } from 'react';
import RenderLogin from './screens/login'
import RenderRegister from './screens/cadastro'
import Home from './screens/home'
import NovaEntrada from './screens/newEntry';
import NovaSaida from './screens/newExit';
import { loginPostReceive } from './screens/apiUrls.js'

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(loginPostReceive);
  const userData = { user: user, setUser: setUser };
  return (
    <UserContext.Provider value={userData}>
      <BlackBackground>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RenderLogin />} />
            <Route path="/cadastro" element={<RenderRegister />} />
            <Route path="/home" element={<Home />} />
            <Route path="/nova-entrada" element={<NovaEntrada />} />
            <Route path="/nova-saida" element={<NovaSaida />} />
          </Routes>
        </BrowserRouter>
      </BlackBackground>
    </UserContext.Provider>
  );
}

export default App;

const BlackBackground = styled.div`
background-color: #8C11BE;;
height: 100vh;
width:100%vw;
display: flex;
justify-content: center;
`
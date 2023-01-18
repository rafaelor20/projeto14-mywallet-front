import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { useState, createContext } from 'react';
import RenderLogin from './components/login'
import RenderRegister from './components/cadastro'
import Home from './components/home'
import Subscription from './components/subscription';
import Subscriptions from './components/subscriptions';
import { loginPostReceiveObj } from './components/apiUrls.js'

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(loginPostReceiveObj);
  const userData = { user: user, setUser: setUser };
  return (
    <UserContext.Provider value={userData}>
      <BlackBackground>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RenderLogin />} />
            <Route path="/cadastro" element={<RenderRegister />} />
            <Route path="/subscriptions/:id" element={<Subscription />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/home" element={<Home />} />
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
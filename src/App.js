import "./App.css";
import 'animate.css';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { ConfigProvider } from "antd";
import styled from "styled-components";
import NavBar from "./components/Navbar";

function App() {
  return (
    <ConfigProvider >
        <BrowserRouter>
          <NavBar />
          <AppContainer>
            <Routes />
          </AppContainer>
        </BrowserRouter>
    </ConfigProvider>
  );
}

const AppContainer = styled.div`
  /* widht: 100%;
  max-width: 1100px; */
  width: 85vw;
  margin: 0 auto;
`;

export default App;

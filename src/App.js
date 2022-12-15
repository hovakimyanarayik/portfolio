import "./App.css";
import 'animate.css';
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { ConfigProvider } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getProjects } from "./slices/ProjectsSlice";
import Layout from "./components/Layout";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProjects())
  }, [])
  return (
    <ConfigProvider >
        <BrowserRouter>
          <Layout>
            <AppContainer>
              <Routes />
            </AppContainer>
          </Layout>
        </BrowserRouter>
    </ConfigProvider>
  );
}

const AppContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export default App;

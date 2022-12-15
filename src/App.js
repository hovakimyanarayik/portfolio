import "./App.css";
import 'animate.css';
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getProjects } from "./slices/ProjectsSlice";
import Layout from "./components/Layout";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProjects())
    // eslint-disable-next-line
  }, [])
  return (
        <BrowserRouter>
          <Layout>
            <AppContainer>
              <Routes />
            </AppContainer>
          </Layout>
        </BrowserRouter>
  );
}

const AppContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export default App;

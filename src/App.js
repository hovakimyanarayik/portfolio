import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { ConfigProvider } from "antd";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Counter />
          <AppContainer>
            <Routes />
          </AppContainer>
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
  );
}

const AppContainer = styled.div`
  max-width: 800px;
  widht: 100%;
  margin: 0 auto;
`;

export default App;

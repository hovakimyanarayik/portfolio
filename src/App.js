import './App.css'
import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes';
import { ConfigProvider } from 'antd';
import styled from 'styled-components';
import Navigation from './components/Navigation';



function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}
    >
        <BrowserRouter>
        <Navigation />
          <AppContainer>
            <Routes />
          </AppContainer>
        </BrowserRouter>
    </ConfigProvider>
  );
}

const AppContainer = styled.div`
  max-width: 800px;
  widht: 100%;
  margin: 0 auto;
`

export default App;
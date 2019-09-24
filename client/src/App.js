import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import Sidebar from './components/Sidebar';
const { Content } = Layout;

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>
          <Sidebar />
          <Layout>
            <Content style={{ margin: '0' }}>
              <Routes />
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

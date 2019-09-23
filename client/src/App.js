import React, { useState } from 'react';
import './App.css';
import { Layout, Menu, Icon } from 'antd';
import AvatarWithLevel from './components/AvatarWithLevel';
import Players from './views/Players';
const { Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  const IconSize = { fontSize: 24 };

  return (
    <div className='App'>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className='logo' />
          <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
            <AvatarWithLevel
              level={1}
              user={{ name: 'Diego', color: 'Blue' }}
            />
            <Menu.Item key='1'>
              <Icon type='home' style={IconSize} />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type='ordered-list' style={IconSize} />
              <span>Scoreboards</span>
            </Menu.Item>
            <SubMenu
              key='sub1'
              title={
                <span>
                  <Icon type='user' style={IconSize} />
                  <span>Players</span>
                </span>
              }>
              <Menu.Item key='3'>
                <Icon type='crown' />
                Top
              </Menu.Item>
              <Menu.Item key='4'>
                <Icon type='fire' />
                Active
              </Menu.Item>
              <Menu.Item key='5'>
                <Icon type='smile' />
                Friends
              </Menu.Item>
            </SubMenu>
            <Menu.Item key='6'>
              <Icon type='setting' style={IconSize} />
              <span>Settings</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0' }}>
            {//<Profile user={{name: 'DiegoDieh', email:'dieh.diego@gmail.com', experience: 123, age: Date.now(), registerDate: Date.now(), phone: '+5491135418548' }} />
          }
          <Players />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

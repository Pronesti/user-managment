import React, {useState} from 'react'
import {Menu, Layout, Icon} from 'antd'
import {Link} from 'react-router-dom'
import AvatarWithLevel from './AvatarWithLevel';
const {Sider} = Layout;
const { SubMenu } = Menu;


export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = () => {
      setCollapsed(!collapsed);
    };
  
    const IconSize = { fontSize: 24 };
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className='logo' />
          <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
          <Link to="/profile">
            <AvatarWithLevel
              level={2}
              user={{ name: 'Diego', color: 'Blue' }}
            />
            </Link>
            <Menu.Item key='1'>
            <Link to="/">
              <Icon type='home' style={IconSize} />
              <span>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key='2'>
            <Link to="/scoreboard">
              <Icon type='ordered-list' style={IconSize} />
              <span>Scoreboards</span>
              </Link>
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
              <Link to="/players/top">
                <Icon type='crown' />
                Top
                </Link>
              </Menu.Item>
              <Menu.Item key='4'>
              <Link to="/players/active">
                <Icon type='fire' />
                Active
                </Link>
              </Menu.Item>
              <Menu.Item key='5'>
              <Link to="/players/friends">
                <Icon type='smile' />
                Friends</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key='6'>
            <Link to="/settings">
              <Icon type='setting' style={IconSize} />
              <span>Settings</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
    )
}

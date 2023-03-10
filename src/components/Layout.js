import React from 'react';
import { Layout, Menu } from 'antd';
import MyHeader from './header';

const { Header, Content, Footer } = Layout;

class MyLayout extends React.Component {
  render() {
    return (
      <Layout>
        {/* <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
          </Menu>
        </Header> */}
        <MyHeader/>
        <Content style={{ padding: '0', margin:'0',backgroundColor:'rgb(236 239 241)' }}>
          <div className="site-layout-content">
            {this.props.children}
          </div>
        </Content>
        <Footer  className='main' style={{ textAlign: 'center' }}>My App ©2023</Footer>
      </Layout>
    );
  }
}

export default MyLayout;

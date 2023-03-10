import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

class MyHeader extends React.Component {
  state = {
    current: 'home',
    collapsed: false,
  };

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <Header>
        <div className="logo" />
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          theme="dark"
          collapsed={collapsed}
          collapsedWidth={0}
          breakpoint="lg"
          onBreakpoint={(broken) => {
            this.setState({ collapsed: broken });
          }}
        >
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default MyHeader;

// function Header() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">To Do App</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="signup">Signup</Nav.Link>
//             <Nav.Link href="login">Login</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;
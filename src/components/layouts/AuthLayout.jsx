import * as React from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <Container fluid>
      <Row>
        <Navbar bg="light" expand="lg">
          <Container>
            {/* <Navbar.Brand >Gamey Verify</Navbar.Brand> */}
            <Link to="/" className='btn btn-light'>Gamey Verify</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Link to="/login" className='btn btn-light'>Login</Link>
              <Link to="/register" className='btn btn-light'>Register</Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row>
        <Container fluid>
          <Outlet />
        </Container>
      </Row>
    </Container>
  );
};

export default AuthLayout;

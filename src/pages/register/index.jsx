import React, { useState } from 'react';
import { Badge, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./index.css";

function Register() {

  const [gender, setGender] = useState('');

  return (
    <Container fluid>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label className="required">First Name</Form.Label>
              <Form.Control type="text" className="bg-light" />
            </Form.Group>
          </Col>
          <Col >
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label className="required">Last Name</Form.Label>
              <Form.Control type="text" className="bg-light" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="required">Email</Form.Label>
          <Form.Control type="email" className="bg-light" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="retypeEmail">
          <Form.Label className="required">Retype email</Form.Label>
          <Form.Control type="retypeEmail" className="bg-light" />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="dateOfBirth">
              <Form.Label className="required">Date of Birth</Form.Label>
              <Form.Control type="date" format="mm-dd-yyyy" className="bg-light" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="required">Password</Form.Label>
              <Form.Control type="password" className="bg-light" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="retypeEmail">
          <Form.Label>Gender: </Form.Label> <strong className="text-danger">{gender}</strong>
          <Row>
            <Col>
              <Badge pill bg={gender === 'Male' ? "danger" : "primary"} onClick={() => setGender('Male')}>
                MALE
              </Badge>{' '}
              <Badge pill bg={gender === 'Female' ? "danger" : "primary"} onClick={() => setGender('Female')}>
                FEMALE
              </Badge>{' '}
              <Badge pill bg={gender === 'Undisclosed' ? "danger" : "primary"} onClick={() => setGender('Undisclosed')}>
                UNDISCLOSED
              </Badge>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" className="bg-light" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label={<>By continuing, you agree to GameyGram's <Link to="#" >Terms & Cnnditions</Link> and <Link to="#" >Privacy Policy</Link></>} />
        </Form.Group>

        <Row>
          <Col className="d-grid gap-2">
            <Button variant="primary" type="submit" size="lg" style={{ backgroundColor: '#8006d3' }}>
              SIGNUP
            </Button>
          </Col>
          <Col>
            <Link to="/login">Already have an account? Login</Link>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Register;

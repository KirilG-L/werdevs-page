import './style.scss';
import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom'

const View = () => {
  return (
    <Container className={'header'}>
      <Row className={'header_body'}>
        <Col className={'logo'}>
          <img className={'logo__img'} src={Logo} alt={'logo'}/>
        </Col>
        <Col className={'navbar'}>
          <Row>
            <nav className="navbar-list">
              <Col className={'navbar_item'}>
                <Link to='/'>Home</Link>
              </Col>
              <Col className={'navbar_item'}>
                <Link to='/about'>About Us</Link>
              </Col>
            </nav>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export { View };

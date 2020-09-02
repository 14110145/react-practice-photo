import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row, Nav } from "reactstrap";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <Container>
        <Row className="justtify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__titile"
              href="#"
              target="__blank"
              rel="noopener noreferrer"
            >
              Easy Fontend
            </a>
          </Col>
          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/photos"
              activeClassName="header__link--active"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Header;

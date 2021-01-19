import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import { Navbar, Nav } from "react-bootstrap";

const NavBar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <Nav className="ml-auto">
      <Nav.Link>
        <Link to="/settings" style={{ color: "#228b22" }}>
          Settings
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/" onClick={logout} style={{ color: "#228b22" }}>
          Logout
        </Link>
      </Nav.Link>
    </Nav>
  );
  const guestLinks = (
    <Nav className="ml-auto">
      <Nav.Link>
        <Link to="/login" style={{ color: "#228b22" }}>
          Login
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/register" style={{ color: "#228b22" }}>
          Register
        </Link>
      </Nav.Link>
    </Nav>
  );
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Nav.Link href="/" style={{ color: "#228b22" }}>
          ClubsMan
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {isAuthenticated ? authLinks : guestLinks}
      </Navbar.Collapse>
    </Navbar>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavBar);

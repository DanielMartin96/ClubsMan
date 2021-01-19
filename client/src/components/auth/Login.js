import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import { Form, Button, Container, Card } from "react-bootstrap";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  onSubmit = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    this.props.login(email, password);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <Container>
        <Card style={{ position: "relative", top: "60px" }}>
          <Card.Header>
            <h2>Sign In</h2>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  value={this.state.email}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                  value={this.state.password}
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
            <br />
            <p>
              Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);

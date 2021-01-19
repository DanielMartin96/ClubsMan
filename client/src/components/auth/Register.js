import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

import { Button, Container, Form, Card, Dropdown } from "react-bootstrap";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    club: null,
    clubName: "Choose Club",
  };

  onSubmit = (e) => {
    const { name, email, password, password2, club, clubName } = this.state;
    const { register, setAlert } = this.props;
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password, club: { club, clubName } });
    }
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <Container>
        <Card style={{ position: "relative", top: "60px" }}>
          <Card.Header>
            <h2>Sign Up</h2>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  onChange={(e) => this.setState({ name: e.target.value })}
                  value={this.state.name}
                />
              </Form.Group>

              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  {this.state.clubName}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({ club: 42, clubName: "Arsenal" });
                    }}
                  >
                    Arsenal
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({ club: 66, clubName: "Aston Villa" });
                    }}
                  >
                    Aston Villa
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({ club: 51, clubName: "Brighton" });
                    }}
                  >
                    Brighton
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({ club: 44, clubName: "Burnley" });
                    }}
                  >
                    Burnley
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({ club: 49, clubName: "Chelsea" });
                    }}
                  >
                    Chelsea
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({ club: 52, clubName: "Crystal Palace" });
                    }}
                  >
                    Crystal Palace
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({ club: 45, clubName: "Everton" });
                    }}
                  >
                    Everton
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({ club: 36, clubName: "Fulham" });
                    }}
                  >
                    Fulham
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({ club: 63, clubName: "Leeds" });
                    }}
                  >
                    Leeds
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({ club: 46, clubName: "Leicester" });
                    }}
                  >
                    Leicester City
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({ club: 40, clubName: "Liverpool" });
                    }}
                  >
                    Liverpool
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({ club: 50, clubName: "Manchester City" });
                    }}
                  >
                    Manchester City
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({
                        club: 33,
                        clubName: "Manchester United",
                      });
                    }}
                  >
                    Manchester United
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({ club: 34, clubName: "Newcastle" });
                    }}
                  >
                    Newcaste United
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({ club: 62, clubName: "Sheffield Utd" });
                    }}
                  >
                    Sheffield
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({ club: 41, clubName: "Southampton" });
                    }}
                  >
                    Southampton
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({
                        club: 47,
                        clubName: "Tottenham",
                      });
                    }}
                  >
                    Tottenham Hotspur
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({ club: 60, clubName: "West Brom" });
                    }}
                  >
                    West Brom
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({ club: 48, clubName: "West Ham" });
                    }}
                  >
                    West Ham United
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.setState({ club: 39, clubName: "Wolves" });
                    }}
                  >
                    Wolves
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <br />
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  value={this.state.email}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
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
              <Form.Group controlId="formBasicPassword2">
                <Form.Label>Re-enter Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-enter Password"
                  onChange={(e) => this.setState({ password2: e.target.value })}
                  value={this.state.password2}
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
            <br />
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);

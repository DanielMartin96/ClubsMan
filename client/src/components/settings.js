import React, { Component } from "react";
import { Container, Card, Form, Button, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { changeClub, deleteAccount } from "../actions/auth";
import { getFixtures } from "../actions/football";
import history from "../history";

class Settings extends Component {
  state = {
    club: null,
    clubName: "Choose Club",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { club, clubName } = this.state;
    this.props.changeClub({ club, clubName });
    alert("Team Updated");
  };

  onDelete = (e) => {
    e.preventDefault();
    this.props.deleteAccount();
    history.push("/");
  };

  render() {
    if (!this.props.auth.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <Container>
        <Card style={{ position: "relative", top: "60px" }}>
          <Card.Header>
            <h2>Settings</h2>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={this.onSubmit}>
              <p>Change your team here</p>
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
                      this.setState({ club: 46, clubName: "Leicester City" });
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
                    Sheffield Utd
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
              <Button type="submit">Submit</Button>
            </Form>
            <br />
            <Button variant="danger" onClick={this.onDelete}>
              Delete Account
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  changeClub,
  getFixtures,
  deleteAccount,
})(Settings);

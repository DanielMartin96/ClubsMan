import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Fixtures from "./Fixtures";
import Results from "./Results";
import Table from "./Table";
import PlayerStats from "./PlayerStats";

import { Container } from "react-bootstrap";

class Dashboard extends Component {
  render() {
    if (!this.props.auth.isAuthenticated) {
      return <Redirect to="/" />;
    }

    if (!this.props.auth.user) {
      return <div></div>;
    }
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Container
          style={{
            width: "800px",
            margin: "15px",
            height: "100%",
            padding: "10px",
            backgroundColor: "white",
            borderRadius: "4px",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Fixtures />
        </Container>
        <Container
          style={{
            width: "800px",
            margin: "15px",
            padding: "10px",
            height: "100%",
            backgroundColor: "white",
            borderRadius: "4px",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Results />
        </Container>
        <Container
          style={{
            width: "800px",
            margin: "15px",
            padding: "10px",
            height: "100%",
            backgroundColor: "white",
            borderRadius: "4px",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            overflowY: "auto",
          }}
        >
          <Table />
        </Container>
        <Container
          style={{
            width: "800px",
            margin: "15px",
            padding: "10px",
            height: "100%",
            backgroundColor: "white",
            borderRadius: "4px",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            overflowY: "auto",
          }}
        >
          <PlayerStats />
        </Container>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);

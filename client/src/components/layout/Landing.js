import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div
      style={{
        position: "relative",
        top: "25vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "9vh", color: "white" }}>ClubsMan</h1>
      <h4 style={{ fontWeight: "lighter", color: "white" }}>
        The <b>easiest</b> way to follow <b>your</b> football team. Sign up now
        to get up to date fixtures, results, player stats and table.
      </h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/login">
          <Button variant="primary" style={{ margin: "20px", width: "150px" }}>
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button variant="primary" style={{ margin: "20px", width: "150px" }}>
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);

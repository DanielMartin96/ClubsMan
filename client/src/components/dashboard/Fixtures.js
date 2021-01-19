import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { connect } from "react-redux";
import Moment from "react-moment";

import { getFixtures } from "../../actions/football";

class Fixtures extends Component {
  componentDidMount() {
    this.props.getFixtures(this.props.club.club);
  }

  renderFixtures() {
    const { fixtures } = this.props;
    if (fixtures.length === 0) {
      return <div>Loading...</div>;
    }

    return fixtures.map((fixture, idx) => {
      return (
        <Card
          key={idx}
          style={{
            margin: "10px",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Card.Header>
            <h2>Fixture</h2>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <h4>
                {fixture.homeTeam.team_name === this.props.club.clubName
                  ? fixture.awayTeam.team_name
                  : fixture.homeTeam.team_name}
              </h4>

              <img
                src={
                  fixture.homeTeam.team_name === this.props.club.clubName
                    ? fixture.awayTeam.logo
                    : fixture.homeTeam.logo
                }
                style={{ padding: "20px", width: "150px", height: "150px" }}
                alt={
                  fixture.homeTeam.team_name === this.props.club.clubName
                    ? fixture.awayTeam.team_name
                    : fixture.homeTeam.team_name
                }
              />
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <b>Time: {fixture.event_date.substring(11, 16)}</b>
            </ListGroupItem>
            <ListGroupItem>
              <b>
                Date: <Moment format="DD/MM/YYYY">{fixture.event_date}</Moment>
              </b>
            </ListGroupItem>
            <b>
              <ListGroupItem>{fixture.league.name}</ListGroupItem>
            </b>
            <b>
              <ListGroupItem>{fixture.venue}</ListGroupItem>
            </b>
          </ListGroup>
        </Card>
      );
    });
  }

  render() {
    return <>{this.renderFixtures()}</>;
  }
}

const mapStateToProps = (state) => {
  return { fixtures: state.football.fixtures, club: state.auth.user.club };
};

export default connect(mapStateToProps, { getFixtures })(Fixtures);

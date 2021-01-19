import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { connect } from "react-redux";
import Moment from "react-moment";

import { getResults } from "../../actions/football";

class Results extends Component {
  componentDidMount() {
    this.props.getResults(this.props.club.club);
  }

  renderFixtures() {
    const { results } = this.props;
    if (results.length === 0) {
      return <div>Loading...</div>;
    }

    return results.map((fixture, idx) => {
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
            <h2>Result</h2>
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
              <b>{`${fixture.homeTeam.team_name} ${fixture.score.fulltime} ${fixture.awayTeam.team_name}`}</b>
            </ListGroupItem>
            <ListGroupItem>
              <b>
                Date: <Moment format="DD/MM/YYYY">{fixture.event_date}</Moment>
              </b>
            </ListGroupItem>
            <ListGroupItem>
              <b>{fixture.league.name}</b>
            </ListGroupItem>
            <ListGroupItem>
              <b>{fixture.venue}</b>
            </ListGroupItem>
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
  return {
    results: state.football.results,
    club: state.auth.user.club,
  };
};

export default connect(mapStateToProps, { getResults })(Results);

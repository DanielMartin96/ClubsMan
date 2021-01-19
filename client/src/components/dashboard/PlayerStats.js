import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";

import { getPlayerStats } from "../../actions/football";

class PlayerStats extends Component {
  componentDidMount() {
    this.props.getPlayerStats(this.props.club.club);
  }

  renderStats() {
    if (this.props.stats.length === 0) {
      return null;
    }

    return this.props.stats.map((player, idx) => {
      if (player.league === "Premier League") {
        return (
          <tr
            key={idx}
            style={
              player.games.appearences === 0
                ? { display: "none" }
                : { display: "" }
            }
          >
            <td>
              {player.firstname} {player.lastname}
            </td>
            <td>{player.games.appearences}</td>
            <td>{player.goals.total}</td>
            <td>{player.goals.assists}</td>
            <td>{player.cards.yellow}</td>
            <td>{player.cards.red}</td>
          </tr>
        );
      } else {
        return null;
      }
    });
  }

  render() {
    return (
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Games Played</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Yellow Cards</th>
            <th>Red Cards</th>
          </tr>
        </thead>
        <tbody>{this.renderStats()}</tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stats: state.football.stats,
    club: state.auth.user.club,
  };
};

export default connect(mapStateToProps, { getPlayerStats })(PlayerStats);

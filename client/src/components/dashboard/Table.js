import React, { Component } from "react";
import { connect } from "react-redux";
import { Table as LeagueTable } from "react-bootstrap";

import { getTable } from "../../actions/football";

class Table extends Component {
  componentDidMount() {
    this.props.getTable();
  }

  renderTable() {
    if (this.props.table.length === 0) {
      return <div>Loading...</div>;
    }

    const teamNameFormatted = this.props.club.clubName.replace("_", " ");

    return this.props.table[0].map((team) => {
      return (
        <tr key={team.rank}>
          <td>
            {team.teamName === teamNameFormatted ? (
              <b>{team.rank}</b>
            ) : (
              team.rank
            )}
          </td>
          <td>
            {team.teamName === teamNameFormatted ? (
              <b>{team.teamName}</b>
            ) : (
              team.teamName
            )}
          </td>
          <td>
            {team.teamName === teamNameFormatted ? (
              <b>{team.all.matchsPlayed}</b>
            ) : (
              team.all.matchsPlayed
            )}
          </td>
          <td>
            {team.teamName === teamNameFormatted ? (
              <b>{team.all.win}</b>
            ) : (
              team.all.win
            )}
          </td>
          <td>
            {team.teamName === teamNameFormatted ? (
              <b>{team.all.draw}</b>
            ) : (
              team.all.draw
            )}
          </td>
          <td>
            {team.teamName === teamNameFormatted ? (
              <b>{team.all.lose}</b>
            ) : (
              team.all.lose
            )}
          </td>
          <td>
            {team.teamName === teamNameFormatted ? (
              <b>{team.goalsDiff}</b>
            ) : (
              team.goalsDiff
            )}
          </td>
          <td>
            {team.teamName === teamNameFormatted ? (
              <b>{team.points}</b>
            ) : (
              team.points
            )}
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <LeagueTable striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>LL</th>
            <th>GD</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>{this.renderTable()}</tbody>
      </LeagueTable>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    table: state.football.table,
    club: state.auth.user.club,
  };
};

export default connect(mapStateToProps, { getTable })(Table);

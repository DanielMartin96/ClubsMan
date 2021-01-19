import rapidApi from "../utils/rapidApi";
import {
  FIXTURES_LOADED,
  FIXTURES_ERROR,
  RESULTS_LOADED,
  RESULTS_ERROR,
  TABLE_LOADED,
  TABLE_ERROR,
  STATS_LOADED,
  STATS_ERROR,
} from "./types";

// Get Fixtures
export const getFixtures = (team) => async (dispatch) => {
  try {
    const res = await rapidApi.get(`/fixtures/team/${team}/next/4`);

    dispatch({ type: FIXTURES_LOADED, payload: res.data.api.fixtures });
  } catch (err) {
    dispatch({ type: FIXTURES_ERROR });
  }
};

// Get Results
export const getResults = (team) => async (dispatch) => {
  try {
    const res = await rapidApi.get(`/fixtures/team/${team}/last/4`);

    dispatch({ type: RESULTS_LOADED, payload: res.data.api.fixtures });
  } catch (err) {
    dispatch({ type: RESULTS_ERROR });
  }
};

// Get Table
export const getTable = () => async (dispatch) => {
  try {
    const res = await rapidApi.get("/leagueTable/2790");

    dispatch({ type: TABLE_LOADED, payload: res.data.api.standings });
  } catch (err) {
    dispatch({ type: TABLE_ERROR });
  }
};

// Get Player Stats
export const getPlayerStats = (team) => async (dispatch) => {
  try {
    const res = await rapidApi.get(`/players/team/${team}/2020-2021`);

    dispatch({ type: STATS_LOADED, payload: res.data.api.players });
  } catch (err) {
    dispatch({ type: STATS_ERROR });
  }
};

import {
  FIXTURES_LOADED,
  RESULTS_LOADED,
  TABLE_LOADED,
  STATS_LOADED,
} from "../actions/types";

const initialState = {
  fixtures: [],
  results: [],
  table: [],
  stats: [],
};

function footballReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FIXTURES_LOADED:
      return {
        ...state,
        fixtures: payload,
        fixturesLoaded: true,
      };
    case RESULTS_LOADED:
      return {
        ...state,
        results: payload,
        resultsLoaded: true,
      };
    case TABLE_LOADED:
      return {
        ...state,
        table: payload,
        tableLoaded: true,
      };
    case STATS_LOADED:
      return {
        ...state,
        stats: payload,
        statsLoaded: true,
      };
    default:
      return state;
  }
}

export default footballReducer;

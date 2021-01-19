import { combineReducers } from "redux";
import auth from "./auth";
import football from "./football";

export default combineReducers({
  auth,
  football,
});

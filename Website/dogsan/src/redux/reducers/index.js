import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import admin from "./admin";

export default combineReducers({
  auth,
  message,
  admin,
});

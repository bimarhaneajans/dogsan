import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import adminreducer from "./adminreducer";


export default combineReducers({
  auth,
  message,
  //adminreducer
});

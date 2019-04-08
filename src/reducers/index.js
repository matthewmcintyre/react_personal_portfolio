import { combineReducers } from "redux";
import displayAboutMe from "./displayAboutMe";
import headerHandler from "./headerHandler";

export default combineReducers({
  displayAboutMe,
  headerHandler
});

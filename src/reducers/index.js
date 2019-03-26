import { combineReducers } from "redux";
import myReducer from "./myReducer";
import displayAboutMe from "./displayAboutMe";
import displaySummary from "./displaySummary";
import headerHandler from "./headerHandler";

export default combineReducers({
  myReducer,
  displayAboutMe,
  displaySummary,
  headerHandler
});

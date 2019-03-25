import { combineReducers } from "redux";
import myReducer from "./myReducer";
import displayAboutMe from "./displayAboutMe";
import displaySummary from "./displaySummary";

export default combineReducers({ myReducer, displayAboutMe, displaySummary });

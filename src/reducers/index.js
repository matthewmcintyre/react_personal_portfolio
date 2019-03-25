import { combineReducers } from "redux";
import myReducer from "./myReducer";
import displayCVReducer from "./displayCVReducer";

export default combineReducers({ myReducer, displayCVReducer });

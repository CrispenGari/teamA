import { combineReducers, legacy_createStore } from "redux";
import { userReducer } from "./userReducer";
export const store = legacy_createStore(
  combineReducers({
    user: userReducer,
  })
);

import React from "react";
import { Provider } from "react-redux";
import { store } from "../reducers";

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;

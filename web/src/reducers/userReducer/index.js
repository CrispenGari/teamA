import { SET_USER } from "../../constants";

export const userReducer = (state = null, { payload, type }) => {
  switch (type) {
    case SET_USER:
      return (state = payload);
    default:
      return state;
  }
};

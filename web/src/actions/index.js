import { SET_USER } from "../constants";

export const setUser = (payload) => {
  return {
    payload,
    type: SET_USER,
  };
};

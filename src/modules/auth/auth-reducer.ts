import { SET_AUTH_INFO } from "./auth-actions";

const INITIAL_STATE = {};

export const authReducer = (state = INITIAL_STATE, action: any) => {
  const { type, payload } = action;

  switch(type) {
    case SET_AUTH_INFO: return ({
      ...state,
      ...payload,
    });
    default: return state;
  }
}

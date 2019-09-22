import { SET_CURRENT_POSITION } from "./coordinates-actions";

const INITIAL_STATE = {};

export const coordinatesReducer = (state: any = INITIAL_STATE, action: any) => {
  const { type, payload } = action;

  switch(type) {
    case SET_CURRENT_POSITION: return ({
      ...state,
      coordinates: payload,
    });
    default: return state;
  }
};
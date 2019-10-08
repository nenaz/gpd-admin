import { SET_CURRENT_POSITION, SET_USER_COORDINATES_FROM_SERVER } from './coordinates-actions';

const INITIAL_STATE = {};

export const coordinatesReducer = (state: any = INITIAL_STATE, action: any) => {
  const { type, payload } = action;

  switch(type) {
    case SET_CURRENT_POSITION: return ({
      ...state,
      coordinates: payload,
    });
    case SET_USER_COORDINATES_FROM_SERVER: return ({
      ...state,
      ...payload,
    });
    default: return state;
  }
};
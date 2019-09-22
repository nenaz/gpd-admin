import { get } from 'lodash';
import { Dispatch } from 'redux';
import { USER_STORE_KEY } from './coordinates-constants';

export const SET_CURRENT_POSITION = `${USER_STORE_KEY}/SET_CURRENT_POSITION`;

export const setCurrentPositionAction = () => (dispatch: Dispatch<any>) => {
  const geolocation = get(window.navigator, 'geolocation');
  geolocation.getCurrentPosition((position) => {
    console.log('positon', position);
    const obj = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }
    dispatch({
      type: SET_CURRENT_POSITION,
      payload: obj,
    });
  });
};

export const setUserCoordinaterAction = () => (dispatch: Dispatch<any>) => {
  dispatch(setCurrentPositionAction());
};

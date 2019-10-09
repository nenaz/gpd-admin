import Cookie from 'js-cookie';
import { Dispatch } from 'redux';
import { get } from 'lodash';
import { Send } from '@/utils/server-interaction';
import { wsConnection } from "@/utils/server-websocket";
import { ACCESS_TOKEN_COOKIE_KEY, AUTH_TOKEN_COOKIE_EXPIRES, AUTH_STORE_KEY } from './auth-consts';
import { getAuthUserId } from './auth-selectors';


const getWsConnect = (dispatch: Function, state: any) => {
  const connect = wsConnection.wsConnect('admin');
  if (connect.id) {
    const userId = getAuthUserId(state);
    console.log('connect', connect.id);
    dispatch({
      type: 'SET_WS_CONNECT',
      payload: {
        connectId: connect.id,
        userId,
      },
    })
  }
};

export const SET_AUTH_INFO = `${AUTH_STORE_KEY}/SET_AUTH_INFO`;

export const goAuth = (
  dispatch: Dispatch<any>,
  state: any,
) => {
  // const state = getState();
  return Send('authUser', {
    username: 't2',
    password: 't2',
  }).then((authResponse: any) => {
    const { token } = authResponse;
    const expires = AUTH_TOKEN_COOKIE_EXPIRES;
    Cookie.set(
      ACCESS_TOKEN_COOKIE_KEY,
      token,
      { expires: expires > 0 ? new Date(new Date().getTime() + expires * 1000) : undefined },
    );
    // getWsConnect(dispatch, state);
    dispatch({
      type: SET_AUTH_INFO,
      payload: authResponse,
    });
    return get(authResponse, 'auth', get(authResponse, 'result'));
  });
};

export const waitAuth = () => async (dispatch: any, getState: Function) => {
  const state = getState();
  const connect = await goAuth(dispatch, state);
  getWsConnect(dispatch, state);
  return connect;
};

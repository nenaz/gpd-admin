import Cookie from 'js-cookie';
import { get } from 'lodash';
import { Send } from '@/utils/server-interaction';
import { ACCESS_TOKEN_COOKIE_KEY, AUTH_TOKEN_COOKIE_EXPIRES } from './auth-consts';

export const goAuth = () => (
  dispatch: Function,
  getState: Function,
) => {
  return Send('authUser', {
    username: 'nenaz',
    password: '4276',
  }).then((authResponse: any) => {
    const { token } = authResponse;
    const expires = AUTH_TOKEN_COOKIE_EXPIRES;
    Cookie.set(
      ACCESS_TOKEN_COOKIE_KEY,
      token,
      { expires: expires > 0 ? new Date(new Date().getTime() + expires * 1000) : undefined },
    )
    return get(authResponse, 'auth', get(authResponse, 'result'));
  });
};

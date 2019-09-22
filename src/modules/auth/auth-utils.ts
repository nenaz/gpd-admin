import Cookie from 'js-cookie';
import { ACCESS_TOKEN_COOKIE_KEY } from './auth-consts';

export const getCurrentAuthorizationToken = () => Cookie.get(ACCESS_TOKEN_COOKIE_KEY);

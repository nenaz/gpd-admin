import { createSelector } from 'reselect';
import { get } from 'lodash';
import { AUTH_STORE_KEY } from './auth-consts';

const getAuthState = (state: any) => state[AUTH_STORE_KEY];

export const getAuthUserId = createSelector(
  getAuthState,
  (authState: any): string => get(authState, '_id'),
);

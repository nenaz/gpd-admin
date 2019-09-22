import { createSelector } from 'reselect';
import { get } from 'lodash';
// import { getAllUsers } from '@/stubs/receiver-stub';
// import { getAllUsers } from '@/modules/users';
import { RECEIVER_PAGE_STORE_KEY, USER_STATUS_ONLINE } from './receiver-page-constants';

const receiverPageState = (state: any) => state[RECEIVER_PAGE_STORE_KEY];

export const getCoordinates = createSelector(
  receiverPageState,
  (state) => {
    console.log('state', state);
    return ({
      lat: state.lat || 55.75,
      lon: state.lon || 37.57,
    });
  },
);

export const getUsers = createSelector(
  receiverPageState,
  (pageState: any): any => get(pageState, 'users')
);

export const getStateMapPage = createSelector(
  receiverPageState,
  (state) => {
    return state.isShow || false;
  },
);

export const getActiveUserId = createSelector(
  receiverPageState,
  (state) => {
    return state.activeUserId;
  },
);

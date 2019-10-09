import { get, toNumber } from 'lodash';
import { USER_STORE_KEY } from "@/modules/coordinates";

import { createSelector } from 'reselect';
import { RECEIVER_PAGE_STORE_KEY } from '../receiver-page';
import { getActiveUserId, getUsers } from '../receiver-page/receiver-page-selectors';
import { IUser, TFollowUserParams } from '../receiver-page/receiver-page-types';
// import { TRANSMITTER_PAGE_STORE_KEY } from '../transmitter-page/transmitter-page-constants';
// import { MAP_PAGE_STORE_KEY } from './map-page-constants';

// // const MapPageState = state => state[MAP_PAGE_STORE_KEY];
  const mapPageState = (state: any) => state[RECEIVER_PAGE_STORE_KEY];

export const getCoordinates = createSelector(
  mapPageState,
  getActiveUserId,
  getUsers,
  (
    mapState: any,
    usetId: string,
    users: IUser[],
  ) => {
    return ({
      // latitude: 55.75,
      // longitude: 37.57,
      latitude: get(mapState, 'coordinates.latitude', 55.75),
      longitude: get(mapState, 'coordinates.longitude', 37.57),
    });
  },
);

export const getActiveUserParams = createSelector(
  mapPageState,
  (mapState: any): TFollowUserParams => mapState.activeUser,
);

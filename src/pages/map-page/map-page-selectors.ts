import { get, toNumber } from 'lodash';
import { USER_STORE_KEY } from "@/modules/coordinates";

import { createSelector } from 'reselect';
// import { TRANSMITTER_PAGE_STORE_KEY } from '../transmitter-page/transmitter-page-constants';
// import { MAP_PAGE_STORE_KEY } from './map-page-constants';

// // const MapPageState = state => state[MAP_PAGE_STORE_KEY];
  const MapPageState = (state: any) => state[USER_STORE_KEY];

export const getCoordinates = createSelector(
  MapPageState,
  (mapState: any) => {
    return ({
      // latitude: 55.75,
      // longitude: 37.57,
      latitude: get(mapState, 'coordinates.latitude', 55.75),
      longitude: get(mapState, 'coordinates.longitude', 37.57),
    });
  },
);


// import { find } from 'lodash';
// import { GET_ACTUAL_MAP_COORD, GET_START_USER_COORD } from './map-page-constants';
// import { getAllUsers } from '@/modules/users';
// import { RECEIVER_PAGE_STORE_KEY, getActiveUserId } from '@/pages/receiver-page';

// // получение координат с сервера
// export const getGPSCoord = (coordinates) => (dispatch) => {
//   const newCoord = {
//     lat: coordinates.lat + 0.01,
//     lon: coordinates.lon + 0.01,
//   };
//   dispatch({
//     type: GET_ACTUAL_MAP_COORD,
//     payload: newCoord,
//   });
// };

// // солучение начальных координат 
// export const getStartUserCoordinater = () => (dispatch, getState) => {
//   const user = find(getAllUsers(getState()), { id: getActiveUserId(getState())});
//   dispatch({
//     type: GET_START_USER_COORD,
//     payload: user.coordinates,
//   });
// };

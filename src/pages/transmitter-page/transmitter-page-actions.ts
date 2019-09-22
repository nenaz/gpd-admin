import { get } from 'lodash';
// import { Send } from '@/js/server-interactions';
// import { getActiveUserId } from '@/pages/receiver-page';
// import { GET_CURRENT_POSITION,  } from '@/modules/coordinates';
// import { SET_ACTIVE_USER_ONLINE_STATUS } from '@/modules/users';

// export const setCurrentPositionAction = () => (dispatch) => {
//   const geolocation = get(window.navigator, 'geolocation', null);
//   geolocation.getCurrentPosition((position) => {
//     dispatch({
//       type: GET_CURRENT_POSITION,
//       payload: position.coords,
//     });
//   });
// };

// export const setUserStatusAction = (isOnline = false) => (dispatch) => {
//   dispatch({
//     type: SET_ACTIVE_USER_ONLINE_STATUS,
//     payload: isOnline,
//   });
// };

// export const setUserCoordinaterAction = () => (dispatch) => {
//   dispatch(setCurrentPositionAction());
// };

// export const setUserCoordinateAction = () => (dispatch, getState) => {
//   const geolocation = get(window.navigator, 'geolocation', null);
//   geolocation.getCurrentPosition((position) => {
//     console.log('position', position);
//     Send('setUserCoord', {
//       userId: getActiveUserId(getState()),
//       coordinates: position.coords,
//     })
//       .then((responce) => {
//         console.log(responce);
//         // dispatch({
//         //   type: SET_ALL_ACCOUNT,
//         //   payload: responce,
//         // });
//       })
//       .catch((error) => { console.log(error); });
//   });
// };

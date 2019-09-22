import { FETCH_USERS } from './receiver-page-actions';
// import { SET_ACTIVE_USER_ID } from '@/modules/users';

const INITIAL_VALUES = {
  // activeUserId: 1,
};

export const ReceiverPageReducer = (state = INITIAL_VALUES, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USERS: return({
      ...state,
      ...payload,
    });
    // case SET_ACTIVE_USER_ID: return({
    //   ...state,
    //   activeUserId: payload,
    // });
    default:
      return state;
  }
}

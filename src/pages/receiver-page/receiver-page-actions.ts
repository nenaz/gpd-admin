import { Dispatch } from 'redux';
import { isEmpty, filter } from 'lodash';
import { Send } from '@/utils/server-interaction';
import { RECEIVER_PAGE_STORE_KEY } from './receiver-page-constants';
import { IUser } from './receiver-page-types';

interface IResponseUsers {
  users: IUser[],
};

export const FETCH_USERS = `${RECEIVER_PAGE_STORE_KEY}/FETCH_USERS`;

export const fetchAllUsers = () => (dispatch: Dispatch, getState: () => any) => {
  return Send('getUsers')
    // .then((response: IResponseUsers | unknown) => {
    .then((response: any) => {
      const gpsUsers = filter(response, (item: IUser) => {
        return !isEmpty(item.coordinates);
      })
      dispatch({
        type: FETCH_USERS,
        payload: {
          users: gpsUsers,
        },
      })
    })
};

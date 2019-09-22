import { Dispatch } from 'redux';
import { isEmpty, omit, get } from 'lodash';
import { Send } from '@/utils/server-interaction';
import { IApplicationState } from '@/reducers';
import { IFetchAccountData, ISaveResponse } from './accounts-types';
import { ACCOUNTS_WIDGET_STORE_KEY } from './accounts-constants';
import { getFormData } from './accounts-selectors';
import { accountsFilter } from './accounts-utils';

export const SET_WIDGET_ACCOUNTS_DATA = `${ACCOUNTS_WIDGET_STORE_KEY}/SET_WIDGET_ACCOUNTS_DATA`;

export const fetchAccounts = () => (
  dispatch: Dispatch,
  getState: () => IApplicationState
) => {
  return Send('getAccounts')
    .then((response: any) => {
      console.log('response', response);
      const currentAccounts = accountsFilter(response);
      
      dispatch({
        type: SET_WIDGET_ACCOUNTS_DATA,
        payload: currentAccounts,
      });
    })
};

export const saveAccountData = () => (
  dispatch: Dispatch,
  getState: () => IApplicationState,
) => {
  const state = getState();
  const values = getFormData(state, { formName: 'accounts' });
  console.log('values', values);
  return Send('addAccount', { ...omit(values, ['_id']) })
    .then((response: any) => {
      console.log('saveResponse', response);
      const currentAccounts = accountsFilter(response);
      
      dispatch({
        type: SET_WIDGET_ACCOUNTS_DATA,
        payload: currentAccounts,
      });
    })
};

export const deleteAccount = () => (
  dispatch: Dispatch,
  getState: () => IApplicationState,
) => {
  const state = getState();
  const values = getFormData(state, { formName: 'accounts' });
  return Send('deleteAccount', { idFrom: get(values, '_id') })
    .then((response: any) => {
      const currentAccounts = accountsFilter(response);
      dispatch({
        type: SET_WIDGET_ACCOUNTS_DATA,
        payload: currentAccounts,
      });
    })
};

import { createSelector } from 'reselect';
import { get, filter } from 'lodash';
import { getFormValues } from 'redux-form';
import { ACCOUNTS_WIDGET_STORE_KEY } from './accounts-constants';
import { IFetchAccountData } from './accounts-types';

const getWidgetAccountsState = (state: any): any => state[ACCOUNTS_WIDGET_STORE_KEY];

export const getFormData = (state: any, { formName }: any) => getFormValues(formName)(state);

export const getAccountsData = createSelector(
  getWidgetAccountsState,
  (accountsState: Object): IFetchAccountData[] => get(accountsState, 'accountsData'),
);

export const getAccountData = createSelector(
  (state: any, ownProps: any) => get(ownProps, 'f7route.query.id'),
  getAccountsData,
  (id: string, accountsData: IFetchAccountData[]) => {
    const filteredValue = filter(accountsData, (accountData) => accountData.id === id);
    return filteredValue[0];
  },
);

export const getAccountsLength = createSelector(
  getAccountsData,
  (accountsData: Object[]): number => get(accountsData, 'length', 0),
);

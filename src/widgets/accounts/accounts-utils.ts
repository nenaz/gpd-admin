import { isEmpty } from 'lodash';

export const accountsFilter = (accounts: any) => (
  accounts.filter((account: any) => {
    return !isEmpty(account.accountName);
  })
);

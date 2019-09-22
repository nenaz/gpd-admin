import * as React from 'react';
import cn from 'classnames';
import {
  Block,
  Row,
  Col,
  BlockTitle,
} from 'framework7-react';
import { map } from 'lodash';
import { Widget } from '@/components/widget';
import { SquareBlock, SquareAddBlock } from '@/components/square-blocks';
import accounts from './accounts.module.scss';
import { IFetchAccountData } from './accounts-types';
import { ACCOUNTS_WIDGET_VIEW, ACCOUNTS_WIDGET_NEW } from './accounts-constants';

interface IAccounts {
  accountsData: IFetchAccountData[],
  accountsDataLength: number,
};

export class Accounts extends React.PureComponent<IAccounts> {
  render() {
    const { accountsData, accountsDataLength } = this.props;
    return (
      <Widget className={accounts.wrapper}>
        <BlockTitle>
          {`ACCOUNTS (${accountsDataLength})`}
        </BlockTitle>
        <div className={accounts['wrapper__parent-block']}>
          {map(accountsData, (accountData: IFetchAccountData) => {
            const {
              id,
              accountName,
              amount,
              endDate,
              type,
              accountNumber,
              hide,
            } = accountData;
            return (
              <SquareBlock
                key={id}
                id={id}
                accountName={accountName}
                amount={amount}
                endDate={endDate}
                type={type}
                accountNumber={accountNumber}
                hide={hide}
                url={ACCOUNTS_WIDGET_VIEW}
              />
            );
          })}
          <SquareAddBlock url={ACCOUNTS_WIDGET_NEW} />
        </div>
      </Widget>
    );
  }
}
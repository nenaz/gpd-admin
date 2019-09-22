import * as React from 'react';
import { Icon, Link } from 'framework7-react';
import styles from '../square-blocks.module.scss';
import { string } from 'prop-types';

interface ISquareBlock {
  accountName: string,
  amount: number,
  url: string,
  endDate: string,
  type: string,
  accountNumber: string,
  hide: boolean,
  id: string,
};

export class SquareBlock extends React.PureComponent<ISquareBlock> {
  render() {
    const {
      accountName,
      amount,
      url,
      id,
    } = this.props;
    return (
      <div className={styles['square-block']} >
        <Link
          href={`${url}&id=${id}`}
          className={styles['square-block__link']}
        >
          <div>
            <span className={styles['square-block__account-title']}>
              {accountName}
            </span>
          </div>
          <div className={styles['square-block__account-icon']}>
            <Icon fa="cc-visa" className={styles['square-block__icon']} />
            {/* <Icon fa="cc-mastercard" /> */}
          </div>
          <div>
            <span className={styles['square-block__account-balance']}>
              {amount}
            </span>
          </div>
        </Link> 
      </div>
    );
  }
}
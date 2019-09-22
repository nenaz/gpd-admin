import * as React from 'react';
import {
  BlockTitle, Block, Page
} from 'framework7-react';
import { Widget } from '@/components/widget';
import balance from './balance.module.scss';

interface IBalance {};

export class Balance extends React.PureComponent<IBalance> {
  render() {
    return (
      <Widget className={balance.wrapper}>
        <BlockTitle>BALANCE</BlockTitle>
        <Block strong inset>
          <div>
            <span>Баланс</span>
            <span>99 999 999.99</span>
          </div>
          <div>
            <span>Баланс</span>
            <span>99 999 999.99</span>
          </div>
        </Block>
      </Widget>
    );
  }
}
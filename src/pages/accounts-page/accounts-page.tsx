import * as React from 'react';
import {
  Page,
  // Navbar, 
  List,
  ListInput,
  Icon,
} from 'framework7-react';
import { ReduxFormTextInput } from '@/components/fields/text-input-field';
import { Navbar } from '@/components/navbar';
import accountsPage from './accounts-page.module.scss';

interface IAccountPage {
  RightPartComponent: React.ElementType,
};

export class AccountsPage extends React.PureComponent<IAccountPage> {
  render() {
    const { RightPartComponent } = this.props;
    return (
      <Page name="Account" className={accountsPage['accounts-page']}>
        {/* <Navbar title="Account" backLink showRightPart /> */}
        <Navbar
          title="Account"
          backLink={true}
          Component={RightPartComponent}
        />
        <ReduxFormTextInput
          name='accountName'
          placeholder='Название'
        />
        <ReduxFormTextInput
          name='number'
          placeholder='Номер'
        />
        <ReduxFormTextInput
          name='endDate'
          placeholder='Дата закрытия'
        />
        <ReduxFormTextInput
          name='amount'
          placeholder='Остаток'
        />
        <ReduxFormTextInput
          name='type'
          placeholder='Тип'
          disabled
        />
        <ReduxFormTextInput
          name='private'
          placeholder='Видимость'
        />
      </Page>
    );
  }
}

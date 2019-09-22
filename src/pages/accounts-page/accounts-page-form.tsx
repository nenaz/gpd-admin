import * as React from 'react';
import { reduxForm } from 'redux-form';
import { AccountsPage } from './accounts-page';

interface IAccountsPageFormComponent {
  createRightPart: Function,
};

export class AccountsPageFormComponent extends React.PureComponent<IAccountsPageFormComponent> {
  render() {
    console.log('this.props', this.props);
    return (
      <AccountsPage
        RightPartComponent={this.props.createRightPart()}
        {...this.props}
      />
    );
  }
}

export const AccountsPageForm = reduxForm({
  form: 'accounts',
  enableReinitialize: true,
// @ts-ignore
})(AccountsPageFormComponent);
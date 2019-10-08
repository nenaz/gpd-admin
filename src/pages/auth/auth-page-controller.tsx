import * as React from 'react';
import { connect } from 'react-redux';
import { waitAuth } from '@/modules/auth';
import { AuthPage } from './auth-page';
// import { goToPage } from '@/utils/route-utils';

interface IAuthPageController {
  path: string,
  waitAuth: () => void,
};

export class AuthPageControllerComponent extends React.PureComponent<IAuthPageController> {
  handleAuth = async () => {
    const response = await this.props.waitAuth();
    // @ts-ignore
    if (response) {
      // @ts-ignore
      this.$f7router.navigate({ name: 'home' });
    }
  };
  
  render() {
    return (
      <AuthPage
        handleAuth={this.handleAuth}
        // handleAuth={this.handleWSconnect}
        // handleMessage={this.handleWsSend}
        path="/"
      />
    );
  }
}

const mapDispatchToProps = {
  waitAuth,
};

export const AuthPageController = connect(
  null, mapDispatchToProps,
)(AuthPageControllerComponent);
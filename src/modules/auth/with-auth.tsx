import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { getCurrentAuthorizationToken } from './auth-utils';

interface AuthenticateCurrentUserComponentProps {};

export const withAuth = (WrappedComponent: React.ElementType) => {
  class AuthenticateCurrentUserComponent extends React.PureComponent<AuthenticateCurrentUserComponentProps> {
    displayName = 'AuthenticateCurrentUserComponent';

    componentDidMount() {
      const currentAuthorizationToken = getCurrentAuthorizationToken();
      if (!currentAuthorizationToken) {
        this.goToLoginPage();
        return;
      }
    }
    // @ts-ignore
    goToLoginPage = () => this.$f7router.navigate({ name: 'auth' });

    render() {
      return (
        <WrappedComponent
          goToLoginPage={this.goToLoginPage}
          {...this.props}
        />
      );
    }
  }

  const mapStateToProps = createStructuredSelector({
  });

  return compose(
    connect(
      mapStateToProps,
      {},
    ),
  )(AuthenticateCurrentUserComponent);
}

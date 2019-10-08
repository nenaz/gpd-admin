import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { routeToPage } from '@/modules/routes';
import { getUsers } from './receiver-page-selectors';
import { ReceiverPage } from './receiver-page';
import { fetchAllUsers, setActiveUserId } from './receiver-page-actions';
import { IUser, TFollowUserParams } from './receiver-page-types';

interface IReceiverPage {
  users: IUser[],
  fetchAllUsers: () => void,
  followUser?: (params: TFollowUserParams) => void,
  setActiveUserId: (userId: string) => void,
};

class ReceiverPagerControllerComponent extends React.PureComponent<IReceiverPage> {
  componentDidMount() {
    this.props.fetchAllUsers();
  }

  routeToPage = (pageName: string) =>{
    // @ts-ignore
    this.$f7.views.main.router.navigate({ name: pageName });
    // this.$f7router.navigate({ name: pageName });
  };

  followUser = (params: TFollowUserParams) => {
    console.log('id', params);
    this.props.setActiveUserId(params.id);
    this.routeToPage('mapPage');
  }
  
  render() {
    const { users } = this.props;

    return(
      <ReceiverPage
        users={users}
        handlefollowUser={this.followUser}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  users: getUsers,
  // stateShowMapPage: getStateMapPage,
});

const mapDispatchToProps = {
  setActiveUserId,
  fetchAllUsers,
};

export const ReceiverPagerController = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReceiverPagerControllerComponent);

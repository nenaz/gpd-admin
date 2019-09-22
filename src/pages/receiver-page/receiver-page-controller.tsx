import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { getUsersFromDB } from '@/modules/users';
import { getUsers } from './receiver-page-selectors';
import { ReceiverPage } from './receiver-page';
import { fetchAllUsers } from './receiver-page-actions';
import { IUser } from './receiver-page-types';

interface IReceiverPage {
  users: IUser[],
  fetchAllUsers: () => void,
};

class ReceiverPagerControllerComponent extends React.PureComponent<IReceiverPage> {
  componentDidMount() {
    this.props.fetchAllUsers();
  }

  // followUser = (user) => {
  //   this.props.setActiveUserId(user.id);
  //   this.props.routeToPage('mapPage');
  // }
  
  render() {
    const { users } = this.props;

    return(
      <ReceiverPage users={users} />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  users: getUsers,
  // stateShowMapPage: getStateMapPage,
});

const mapDispatchToProps = {
  // setActiveUserId,
  fetchAllUsers,
};

export const ReceiverPagerController = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReceiverPagerControllerComponent);

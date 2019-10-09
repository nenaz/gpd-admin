import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getActiveUserParams } from './map-page-selectors';
// import { getGPSCoord, getStartUserCoordinater } from './map-page-actions';
// import { setUserCoordinaterAction } from '@/modules/coordinates';
import { wsConnection } from '@/utils/server-websocket';
import { MapPage } from './map-page';

interface IMapPageControllerComponent {
  activeUserParams: any,
  getActiveUserParams: () => void,
};

class MapPageControllerComponent extends React.PureComponent<IMapPageControllerComponent> {
  ws = null;
  componentDidMount() {
    // this.props.setUserCoordinaterAction();
    // this.props.getActiveUserParams();
    this.ws = wsConnection.wsConnect('admin');
    console.log('ws', this.ws);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    wsConnection.wsDisconnect(this.ws);
  }

  // handleWSconnect = () => {
  //   wsConnect();
  // };

  render() {
    const { activeUserParams } = this.props;
    console.log('this.props', this.props);
    return(
      <MapPage coordinates={activeUserParams.coordinates} />
      // <MapPage
      //   coordinates={userCoordinates}
      //   handleWSconnect={this.handleWSconnect}
      // />
      // <div />
    );
  }
};

const mapStateToProps = createStructuredSelector({
  activeUserParams: getActiveUserParams,
});

const mapDispatchToProps = {
  // getGPSCoord,
  // getStartUserCoordinater,
  // setUserCoordinaterAction,
};

export const MapPageController = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapPageControllerComponent);

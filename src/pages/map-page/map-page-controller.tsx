import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getCoordinates } from './map-page-selectors';
// import { getGPSCoord, getStartUserCoordinater } from './map-page-actions';
// import { setUserCoordinaterAction } from '@/modules/coordinates';
// import { wsConnect, wsSend } from '@/utils/server-websocket';
import { MapPage } from './map-page';

interface IMapPageControllerComponent {
  userCoordinates?: any,
  // setUserCoordinaterAction: () => void,
};

class MapPageControllerComponent extends React.PureComponent<IMapPageControllerComponent> {
  // componentDidMount() {
  //   this.props.setUserCoordinaterAction();
  // }

  // handleWSconnect = () => {
  //   wsConnect();
  // };

  render() {
    const { userCoordinates } = this.props;
    console.log('this.props', this.props);
    return(
      <MapPage coordinates={userCoordinates} />
      // <MapPage
      //   coordinates={userCoordinates}
      //   handleWSconnect={this.handleWSconnect}
      // />
      // <div />
    );
  }
};

const mapStateToProps = createStructuredSelector({
  userCoordinates: getCoordinates,
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

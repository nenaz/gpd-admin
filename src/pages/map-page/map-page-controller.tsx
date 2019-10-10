import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getActiveUserParams } from './map-page-selectors';
import { wsConnection } from '@/utils/server-websocket';
import { MapPage } from './map-page';

interface IMapPageControllerComponent {
  activeUserParams: any,
  getActiveUserParams: () => void,
  fetchCoordinates: () => void,
};

class MapPageControllerComponent extends React.PureComponent<IMapPageControllerComponent> {
  ws: any = {};
  state = {
    id: '',
    coordinates: {
      lat: this.props.activeUserParams.coordinates.lat,
      lon: this.props.activeUserParams.coordinates.lon,
    },
  };
  
  componentDidMount() {
    this.ws = wsConnection.wsConnect('admin');
    this.ws.on('message-coordinates', (message: any) => {
      console.log('message-coordinates', message);
      const oldState = this.state;
      this.setState({
        ...oldState,
        ...message,
      });
    });
    this.ws.on('message', (message: any) => {
      console.log('message', message);
    });
  }

  componentWillUnmount() {
    wsConnection.wsDisconnect(this.ws);
  }
  
  fetchCoordinates = () => {
    this.ws.send('admin', 'getUserCoordinates');
  };

  render() {
    return(
      <MapPage
        coordinates={this.state.coordinates}
        fetchCoordinates={this.fetchCoordinates}
      />
    );
  }
};

const mapStateToProps = createStructuredSelector({
  activeUserParams: getActiveUserParams,
});

const mapDispatchToProps = {

};

export const MapPageController = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapPageControllerComponent);

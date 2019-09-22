import * as React from 'react';
import { connect } from'react-redux';
import { createStructuredSelector } from 'reselect';
// import {
//   setCurrentPositionAction, setUserStatusAction, setUserCoordinateAction,
// } from './transmitter-page-actions';
import { setUserCoordinaterAction } from '@/modules/coordinates';
import { TransmitterPage } from './transmitter-page';
// import { getCurrentPositionSelector } from './transmitter-page-selectors';

interface ITransmitterPageControllerComponent {
  setUserCoordinaterAction: () => void,
};

class TransmitterPageControllerComponent extends React.PureComponent<ITransmitterPageControllerComponent>{
  startTransmittingData = () => {
    // this.props.setUserCoordinateAction();
    // this.props.setUserStatusAction(true);
    // this.props.routeToPage('mapPage');
  };

  componentDidMount() {
    this.props.setUserCoordinaterAction();
  }
  
  render() {
    return (
      <TransmitterPage 
        {...this.props}
        // startTransmittingData={this.startTransmittingData}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // currentPositionFromStore: getCurrentPositionSelector,
});

const mapDispatchToProps = {
  setUserCoordinaterAction,
  // setUserStatusAction,
  // setUserCoordinateAction,
};

export const TransmitterPageController = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransmitterPageControllerComponent);

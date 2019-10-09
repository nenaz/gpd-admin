import * as React from 'react';
import {
  YMaps,
  Map as RYMap,
  ZoomControl,
  // TrafficControl,
  Placemark,
} from 'react-yandex-maps';

interface IMap {
  coordinates: any,
};

export class Map extends React.PureComponent<IMap> {
  render() {
    const { coordinates } = this.props;
    // const coordinates = {
    //   lat: 50,
    //   lon: 50,
    // };
    const placeMark = (
      <Placemark geometry={[coordinates.lat, coordinates.lon]} />
    );
    return(
      <YMaps>
          <RYMap
            defaultState={{ center: [coordinates.lat, coordinates.lon], zoom: 12 }}
            style={{
              width: '100%',
              height: '80vh',
            }}
            state={{ center: [coordinates.lat, coordinates.lon], zoom: 12 }}
          >
            <ZoomControl
              options={{
                size: 'small',
                zoomDuration: 1000,
              }}
            />
            {placeMark}
          </RYMap>
      </YMaps>
    );
  }
}

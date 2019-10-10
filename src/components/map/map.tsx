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
    const zoom = 16;
    const center = [coordinates.lat, coordinates.lon]
    const placeMark = (
      <Placemark geometry={[coordinates.lat, coordinates.lon]} />
    );
    return(
      <YMaps>
          <RYMap
            defaultState={{ center, zoom }}
            style={{
              width: '100%',
              height: '80vh',
            }}
            state={{ center, zoom }}
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

import * as React from 'react';
import { Button } from 'framework7-react';
import { Map } from '@/components/map';
import { Page } from '@/components/page';

interface IMapPage {
  coordinates: any,
};

export class MapPage extends React.PureComponent<IMapPage> {
  render() {
    const { coordinates } = this.props;
    console.log(this.props);
    return(
      <Page {...this.props}>
        {/* <Map {...this.props} /> */}
        <Map coordinates={coordinates} {...this.props} />
        {/* <button onClick={() => this.props.getGPSCoord(coordinates)}> */}
        <Button raised fill>Начать передавать координаты</Button>
      </Page>
    );
  }
}

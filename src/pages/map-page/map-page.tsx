import * as React from 'react';
import { Button } from 'framework7-react';
import { Map } from '@/components/map';
import { Page } from '@/components/page';
import { Navbar } from '@/components/navbar';

interface IMapPage {
  coordinates: any,
  fetchCoordinates: () => void,
};

export class MapPage extends React.PureComponent<IMapPage> {
  render() {
    const { coordinates, fetchCoordinates } = this.props;

    return(
      <Page {...this.props}>
        <Navbar
          title="Map page"
          backLink={true}
        />
        <Button
          raised
          fill
          onClick={fetchCoordinates}
        >
          Начать передавать координаты
        </Button>
        <Map coordinates={coordinates} {...this.props} />
      </Page>
    );
  }
}

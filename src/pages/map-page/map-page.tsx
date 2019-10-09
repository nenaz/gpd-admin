import * as React from 'react';
import { Button } from 'framework7-react';
import { Map } from '@/components/map';
import { Page } from '@/components/page';
import { Navbar } from '@/components/navbar';

interface IMapPage {
  coordinates: any,
  // handleWSconnect: () => void,
};

export class MapPage extends React.PureComponent<IMapPage> {
  render() {
    const { coordinates } = this.props;
    console.log(this.props);
    return(
      <Page {...this.props}>
        <Navbar
          title="Map page"
          // showMenu
          backLink={true}
        />
        {/* <Map {...this.props} /> */}
        <Map coordinates={coordinates} {...this.props} />
        {/* <button onClick={() => this.props.getGPSCoord(coordinates)}> */}
        {/* <Button
          raised
          fill
          onClick={handleWSconnect}
        >
          Начать передавать координаты
        </Button> */}
      </Page>
    );
  }
}

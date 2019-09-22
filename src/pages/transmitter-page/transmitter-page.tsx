import * as React from 'react';
import { Page } from '@/components/page';

interface ITransmitterPage {};

export class TransmitterPage extends React.PureComponent<ITransmitterPage> {
  render() {
    return(
      <Page
        {...this.props}
        title="Transmitter page"
      >
        {/* <button onClick={this.props.startTransmittingData}> */}
        <button>
          Начать показывать мои координаты
        </button>
      </Page>
    );
  }
}

import * as React from 'react';
import { F7Panel } from 'framework7-react';

interface IPanel {
  children: React.ReactNode,
  left: boolean,
  reveal: boolean,
  resizable: boolean,
};

export class Panel extends React.PureComponent<IPanel> {
  render() {
    return (
      <F7Panel {...this.props}>
        {this.props.children}
      </F7Panel>
    );
  }
}
import * as React from 'react';
import uuidv4 from 'uuid/v4';
import { Widget } from '@/components/widget';
import { HOME_PAGE_WIDGETS_LIST } from './widgets-constants';

interface IWidget {};

export class Widgets extends React.PureComponent<IWidget> {
  render() {
    return (
      <React.Fragment>
        {HOME_PAGE_WIDGETS_LIST.map(({ component }) => (
          <React.Fragment key={uuidv4()}>
            {component}
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}

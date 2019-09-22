import * as React from 'react';
import cn from 'classnames';
import { Block } from 'framework7-react';
import widget from './widget.module.scss';

interface IWidget {
  className?: string,
};

export class Widget extends React.PureComponent<IWidget> {
  render() {
    return (
      <div className={cn(widget.wrapper, this.props.className)}>
        <Block>
          {this.props.children}
        </Block>
      </div>
    );
  }
}
import * as React from 'react';
import { omit } from 'lodash';
import {
  F7Navbar,
  F7NavLeft,
  F7NavTitle,
  F7NavRight,
  Button,
} from 'framework7-react';

interface INavbar {
  title?: string,
  showMenu?: boolean,
  showRightPart?: boolean,
  backLink?: boolean,
  backLinkUrl?: string,
  Component?: React.ElementType,
};

export class Navbar extends React.PureComponent<INavbar> {
  renderNavLeft = () => {
    if (this.props.showMenu) {
      return <Button small panelToggle="left" className="display-flex" iconFa="bars" />
    }
    return null;
  };

  render() {
    const {
      title,
      backLinkUrl = '',
      Component,
    } = this.props;
    console.log('backLinkUrl', backLinkUrl);

    return (
      <F7Navbar {...omit(this.props, 'title')}>
        <F7NavLeft backLinkUrl={backLinkUrl}>
          {this.renderNavLeft()}
        </F7NavLeft>
        <F7NavTitle>{title}</F7NavTitle>
        <F7NavRight>
          {Component}
        </F7NavRight>
      </F7Navbar>
    );
  }
}
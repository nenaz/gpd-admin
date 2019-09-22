import * as React from 'react';
import { F7Page } from 'framework7-react';
// import { Navbar } from '@/components/navbar';

interface IPage {
  title?: string,
  name?: string,
  children: React.ReactNode,
};

export class Page extends React.PureComponent<IPage> {
  render() {
    const { title } = this.props;
    return (
      <F7Page>
        {/* <Navbar title={title} /> */}
        {this.props.children}
      </F7Page>
    );
  }
}
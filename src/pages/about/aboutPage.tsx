import * as React from 'react';
import { Page, Navbar } from 'framework7-react';

interface IAboutPage {};

export class AboutPage extends React.PureComponent<IAboutPage> {
  render() {
    return (
      <Page name="about">
        <Navbar title="About" />
        {/* Page content */}
        ...
      </Page>
    );
  }
}

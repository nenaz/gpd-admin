import * as React from 'react';
import {
  // Page,
  // Navbar,
  Link,
  App,
  Appbar,
  Button,
  Searchbar,
  View,
  BlockTitle,
  List,
  ListItem,
} from 'framework7-react';
import { Panel } from '@/components/panel';
import { Page } from '@/components/page';
import { Navbar } from '@/components/navbar';
import { Widgets } from '@/widgets';
// import { HOME_PAGE_WIDGETS_LIST } from './home-page-constants';

interface IHomePage {};

export class HomePage extends React.PureComponent<IHomePage> {
  handlePanelClose = () => {

  };

  handlePanelOpen = () => {
    console.log('panel is open');
  };

  render() {
    return (
      <Page  name="home" title="Home Page">
        <Navbar
          title="Home page"
          showMenu
        />
        <Widgets />
      </Page>
    );
  }
}

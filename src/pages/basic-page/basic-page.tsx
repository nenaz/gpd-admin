import * as React from'react';
import {
  View,
  BlockTitle,
  List,
  ListItem,
  Link,
} from 'framework7-react';
import { Panel } from '@/components/panel';
import { Page } from '@/components/page';

interface IBasicPage {};

export class BasicPage extends React.PureComponent<IBasicPage> {
  render() {
    return (
      <Panel
        left
        reveal
        resizable
      >
        <View>
          <Page>
            <BlockTitle>Основное меню</BlockTitle>
            <List simple-list>
              <ListItem><Link href="#" panelClose>Операции</Link></ListItem>
              <ListItem><Link href="#" panelClose>Настройки</Link></ListItem>
              <ListItem><Link href="#" panelClose>О программе</Link></ListItem>
              <ListItem><Link href="#" panelClose>Выход</Link></ListItem>
            </List>
          </Page>
        </View>
      </Panel>
    );
  }
}
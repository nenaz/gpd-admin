import * as React from 'react';
import {
  Block,
  Button,
  Link,
} from 'framework7-react';
import { Page } from '@/components/page';
import styles from './auth-page.module.scss';

interface IAuthPage {
  handleAuth: () => void,
  path: string,
};

export class AuthPage extends React.PureComponent<IAuthPage> {
  render() {
    const { handleAuth } = this.props;

    return (
      <Page name="login" title="Авторизация">
        <Block className={styles['auth-page-block']}>
          <Button onClick={handleAuth} raised fill>Войти</Button>
        </Block>
      </Page>
    );
  }
}

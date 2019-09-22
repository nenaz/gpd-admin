import * as React from 'react';
import { map } from 'lodash';
import { Row, Col } from 'framework7-react';
import { Page } from '@/components/page';
import './receiver-page.scss';
import { IUser } from './receiver-page-types';

interface IReceiverPage {
  users: IUser[],
};

export class ReceiverPage extends React.PureComponent<IReceiverPage> {
  render() {
    const { users } = this.props;
    console.log('users', users);
    // if (users) {
      return(
        <Page>
          {
            map(users, (user: IUser) => (
              <div key={user._id}>
                <Row>
                  <Col className="nzReceiverPageUserNameListItem">
                    {user.login}{user.status}
                  </Col>
                  <Col className="nzReceiverPageUserNameListItem">
                    {`${user.coordinates.lat}, ${user.coordinates.lon}`}
                  </Col>
                  <Col>
                    {/* <button onClick={() => followUser(user)}>Отслеживать</button> */}
                  </Col>
                </Row>
              </div>
            ))
          }
        </Page>
      );
    // }
    // return(
    //   <div>Receiver</div>
    // );
  }
}

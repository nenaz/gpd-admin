import * as React from 'react';
import { Row, Col, Button } from 'framework7-react';
import { get } from 'lodash';
import { IUser, TFollowUserParams } from './receiver-page-types';
import styles from './receiver-page.module.scss';

interface IReceiverPageRow {
  user: IUser,
  handlefollowUser: (params: TFollowUserParams) => void,
};

export class ReceiverPageRow extends React.PureComponent<IReceiverPageRow> {
  handlefollowUser = () => {
    const { user } = this.props;
    const params: TFollowUserParams = {
      id: get(user, '_id'),
      login: get(user, 'login'),
      coordinates: user.coordinates,
    };

    this.props.handlefollowUser(params);
  }

  render() {
    const { user } = this.props;
    return (
      <Row className={styles.row}>
        <Col className="nzReceiverPageUserNameListItem">
          {user.login}{user.status}
        </Col>
        <Col className="nzReceiverPageUserNameListItem">
          {`${user.coordinates.lat}, ${user.coordinates.lon}`}
        </Col>
        <Col>
          <Button
            onClick={this.handlefollowUser}
          >Отслеживать</Button>
        </Col>
      </Row>
    );
  }
}
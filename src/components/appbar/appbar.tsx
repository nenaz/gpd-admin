import * as React from 'react';
import {
  Button,
  Searchbar,
} from 'framework7-react';

interface IAppbar {};

export class Appbar extends React.PureComponent<IAppbar> {
  render() {
    return (
      <Appbar>
        <div className="left">
          <Button small className="display-flex margin-left-half" iconFa="reply" />
          <Button small className="display-flex margin-left-half" iconFa="share" />
        </div>
        <div className="right">
          <Searchbar
            inline
            customSearch
            disableButton={false}
          />
        </div>
      </Appbar>
    );
  }
}

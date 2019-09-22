import * as React from 'react';
import { Link } from 'framework7-react';
import styles from '../square-blocks.module.scss';

interface ISquareAddBlock {
  url: string,
};

export class SquareAddBlock extends React.PureComponent<ISquareAddBlock> {
  render() {
    const { url } = this.props;
    return (
      <div className={styles['square-block']} >
        <Link href={url} className={styles['square-block__link']}>
          <span className={styles['square-block__add-symbol']}>+</span>
        </Link> 
      </div>
    );
  }
}
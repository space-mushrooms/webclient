import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import styles from './index.css';

const cn = classnames.bind(styles);

export default class Sliding extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={`${cn('page')} transition-item`}>
        {this.props.children}
      </div>
    );
  }
}

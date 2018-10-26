import classnames from 'classnames/bind';
import React, {PureComponent} from 'react';
import {resetPageScroll} from '../../../utils/dom';
import styles from './index.module.css';

const cn = classnames.bind(styles);

export default class Sliding extends PureComponent {
  onTransitionDidEnd() {
    resetPageScroll();
  }

  transitionManuallyStop() {
    resetPageScroll();
  }

  render() {
    const {leave, appear, back} = this.props.options;
    return (
      <div className={`${cn('page', {leave, appear, back})} transition-item`}>
        {this.props.children}
      </div>
    );
  }
}

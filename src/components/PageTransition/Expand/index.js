import classnames from 'classnames/bind';
import React, {PureComponent} from 'react';
import {resetPageScroll} from '../../../utils/dom';
import styles from './index.module.css';

const cn = classnames.bind(styles);

export default class Expand extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      doTransform: false,
    };
  }

  onTransitionWillStart() {
    const {options} = this.props;
    if (!options) {
      // Default animate position if user goto this page directly
      this.setState({doTransform: false});
      return;
    }

    const {top, height, left, width} = options.rect;

    this.setState({
      doTransform: true,
      style: {
        borderRadius: '10px',
        top,
        height,
        left,
        width,
      },
      wrapperStyle: {
        opacity: 1,
      },
    });
  }

  onTransitionDidEnd() {}

  transitionManuallyStart() {
    resetPageScroll();
    this.setState({
      style: this.props.options ? {height: this.props.options.height} : null,
      wrapperStyle: null,
    });
  }

  transitionManuallyStop() {
    resetPageScroll();
    this.setState({doTransform: false});
  }

  render() {
    const {doTransform, style, wrapperStyle} = this.state;
    return (
      <React.Fragment>
        {doTransform ? (
          <div className={cn('wrapper')} style={wrapperStyle}>
            <div className={cn('overlay')} />
            <div className={cn('block')} style={style} />
          </div>
        ) : null}
        <div className={`${cn('page')} transition-item`}>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

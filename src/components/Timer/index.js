import classnames from 'classnames/bind';
import padStart from 'lodash/padStart';
import PropTypes from 'prop-types';
import React from 'react';
import styles  from './index.module.css';

const cn = classnames.bind(styles);

const MINUTE = 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const Style = {
  NONE: 'none',
};

export default class Timer extends React.Component {
  static propTypes = {
    nowGetter: PropTypes.func,
    onComplete: PropTypes.func,
    style: PropTypes.oneOf(Object.values(Style)),
    timestamp: PropTypes.number.isRequired,
  };

  static defaultProps = {
    onComplete: null,
    nowGetter: Date.now,
  };

  constructor(props) {
    super(props);

    this.state = {remaining: 0};
    this.timerId = 0;
  }

  componentDidMount() {
    // 1st timer to prevent html difference between client and server
    this.timerId = setTimeout(this.updateRemaining, 0);
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  getRemaining(props) {
    const now = this.props.nowGetter();
    return Math.round(Math.max(this.props.timestamp - now, 0) / 1000);
  }

  updateRemaining = () => {
    const remaining = this.getRemaining();
    if (remaining !== this.state.remaining) {
      this.setState({remaining});
      if (remaining === 0 && this.props.onComplete) {
        this.props.onComplete();
      }
    }
    if (remaining > 0) {
      this.timerId = setTimeout(this.updateRemaining, 1000);
    }
  }

  renderItem(styles, value, last = false) {
    const string = padStart(value, 2, 0);
    return (
      <span>
        <span className={cn('number')}>{string[0]}</span>
        <span className={cn('number')}>{string[1]}</span>
        {last || ':'}
      </span>
    );
  }

  render() {
    const {style} = this.props;
    const {remaining} = this.state;
    if (!remaining) {
      return null;
    }

    let seconds = remaining;
    const days = Math.floor(seconds / DAY);
    seconds %= DAY;
    const hours = Math.floor(seconds / HOUR);
    seconds %= HOUR;
    const minutes = Math.floor(seconds / MINUTE);
    seconds %= MINUTE;

    return (
      <span className={cn(style)}>
        {!days || this.renderItem(styles, days)}
        {(!days && !hours) || this.renderItem(styles, hours)}
        {this.renderItem(styles, minutes)}
        {this.renderItem(styles, seconds, true)}
      </span>
    );
  }
}

Timer.Style = Style;
